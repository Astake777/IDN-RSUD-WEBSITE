# SERU ICU · RSUD dr. Loekmono Hadi Kudus

Website Smart Education Ruang ICU: profil ICU, member dan struktur organisasi, fasilitas ruangan, edukasi pasien dan keluarga, serta arsip berkas ICU.

Stack: React 19, TypeScript, Vite, Tailwind CSS v4, React Router, lucide-react.

## Menjalankan

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # hasil di dist/
```

## Struktur

- `src/pages/` satu file per route: `/`, `/member`, `/fasilitas`, `/edukasi`, `/edukasi/:slug`, `/berkas-icu`
- `src/data/` seluruh konten (ID/EN) terpisah dari komponen
- `src/config/site.ts` media sosial, kontak, jam layanan footer
- `src/i18n/` pengaturan bahasa ID/EN (disimpan di localStorage)
- `public/images/` foto dan logo yang sudah dioptimasi
- `public/documents/<kategori>/` file PDF berkas ICU

## Menambah dokumen PDF (Berkas ICU)

1. Simpan PDF ke folder kategori, misalnya `public/documents/spo-ruang-icu/spo-transfer-pasien.pdf`.
2. Tambahkan satu entri di `src/data/documents.ts` dengan `category` yang sama, `filePath` sesuai lokasi file, dan `available: true`.
3. Dokumen langsung muncul di kategori tersebut dengan tombol Preview dan Download.
