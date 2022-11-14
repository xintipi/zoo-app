import { Drawer, DrawerProps, TooltipProps } from 'antd'
import clsx from 'clsx'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import DrawerTooltip from '@/components/partials/DrawerTooltip'
import { LocalesEnum } from '@/enums/locales.enum'
import { useLocale } from '@/hooks/useLocale'
import { Locales } from '@/interface/locales.interface'
import styles from '@/styles/modules/DrawerLanguage.module.scss'

export interface ILocales {
  locale: Locales
  value: string
}

export interface DrawerLanguageProps {
  className?: string
  title?: TooltipProps['title']
  placement?: TooltipProps['placement']
}

export const locales: ILocales[] = [
  { locale: LocalesEnum.ja_JP, value: '日本語' },
  { locale: LocalesEnum.en_US, value: 'English' },
]

function DrawerLanguage({ className, title, placement }: DrawerLanguageProps) {
  const [open, setOpen] = useState<DrawerProps['open']>(false)
  const { t } = useTranslation()
  const { locale, toggleLocale } = useLocale()

  // @ts-ignore
  // @ts-ignore
  return (
    <div className={className}>
      <DrawerTooltip title={title} placement={placement} onClick={(event) => setOpen(event)} />

      <Drawer
        title={t<string>('common:language')}
        width={300}
        placement="right"
        className={clsx(styles.drawerLanguage)}
        open={open}
        onClose={() => setOpen(false)}>
        <p data-testid="testSelectLanguage">{t<string>('common:select_language')}</p>
        <ul className={clsx(styles.wrapper)}>
          {locales.map((lang: ILocales) => (
            <li
              data-testid={`locale-${lang.locale}`}
              role={locale === lang.locale ? 'presentation' : undefined}
              key={lang.locale}
              className={clsx(styles.wrapperItem, 'px-[5px]', 'py-[5px]', {
                [styles.active]: locale === lang.locale,
              })}
              onClick={() => toggleLocale(lang.locale)}>
              {lang.value}
            </li>
          ))}
        </ul>
      </Drawer>
    </div>
  )
}

DrawerLanguage.defaultProps = {
  placement: 'bottom',
}

export default DrawerLanguage
