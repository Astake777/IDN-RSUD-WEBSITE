import { useContext } from 'react'
import { AccessibilityContext, type AccessibilityValue } from '../context/AccessibilityContext'

export function useAccessibility(): AccessibilityValue {
  const ctx = useContext(AccessibilityContext)
  if (!ctx) throw new Error('useAccessibility must be used inside AccessibilityProvider')
  return ctx
}
