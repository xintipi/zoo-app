import { vi } from 'vitest'

import { LocalesEnum } from '@/enums/locales.enum'

export default {
  ...(await vi.importActual<any>('@/enums/locales.enum')),
  LocalesEnum: { ...LocalesEnum },
}
