import { vi } from 'vitest'

import { LocalesEnum } from '@/enums/locales.enum'

vi.mock('@/enums/locales.enum', async () => ({
  ...(await vi.importActual<any>('@/enums/locales.enum')),
  LocalesEnum: { ...LocalesEnum },
}))
