import { useCallback, useEffect, useState } from 'react'

const BASE = 'https://rsudkudus.com/spgdt/api.php'
const REFRESH_MS = 60_000

export interface KelasRow {
  kls_name: string
  jml_tt: number
  jml_isi: number
}

export interface Room {
  ruang_name: string
  total_tt: number
  total_isi: number
  discharge_count: number
  dc_today: unknown[]
  dc_tomorrow: unknown[]
  kelas: KelasRow[]
}

export interface KelasGroup {
  kls_name: string
  total_tt: number
  total_isi: number
  ruangan: { ruang_name: string; jml_tt: number; jml_isi: number }[]
}

export interface Stats {
  total: number
  isi: number
  kosong: number
  bor: number
}

export interface BedData {
  rooms: Room[]
  kelas: KelasGroup[]
  stats: Stats
}

async function get<T>(action: string): Promise<T> {
  const res = await fetch(`${BASE}?action=${action}`)
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  const body = (await res.json()) as { status: boolean; data: T }
  if (!body.status) throw new Error('status false')
  return body.data
}

export type Status = 'longgar' | 'sedang' | 'penuh'

// The source sometimes reports more patients than beds (Cempaka 1 Kelas 3), so empty beds never go below zero.
export const emptyBeds = (tt: number, isi: number) => Math.max(0, tt - isi)

// Thresholds read off the hospital's own board: 86% and up shows Penuh, 60 to 83% Sedang.
export function statusOf(tt: number, isi: number): Status {
  if (tt === 0 || emptyBeds(tt, isi) === 0 || isi / tt >= 0.85) return 'penuh'
  return isi / tt >= 0.6 ? 'sedang' : 'longgar'
}

// Room names arrive with stray trailing dots ("Bogenvil 3.").
export const cleanName = (name: string) => name.replace(/\.+$/, '').trim()

export function useBedData() {
  const [data, setData] = useState<BedData | null>(null)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  const [updatedAt, setUpdatedAt] = useState<Date | null>(null)

  const load = useCallback(async () => {
    setLoading(true)
    try {
      const [rooms, kelas, stats] = await Promise.all([get<Room[]>('rooms'), get<KelasGroup[]>('kelas'), get<Stats>('stats')])
      setData({ rooms, kelas, stats })
      setError(false)
      setUpdatedAt(new Date())
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    void load()
    const id = window.setInterval(() => {
      if (!document.hidden) void load()
    }, REFRESH_MS)
    return () => window.clearInterval(id)
  }, [load])

  return { data, error, loading, updatedAt, reload: load }
}
