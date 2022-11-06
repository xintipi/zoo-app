import { Drawer, DrawerProps, Tooltip, TooltipProps } from 'antd'
import clsx from 'clsx'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { ReactComponent as LanguageSVG } from '@/assets/icons/language.svg'
import { LOCALES } from '@/enums'
import { useLocale } from '@/hooks/useLocale'
import { Locales } from '@/interface/locales.interface'

import styles from './DrawerLanguage.module.scss'

interface ILocales {
  locale: Locales
  value: string
}

interface IProps {
  className?: string
  title?: TooltipProps['title']
  placement?: TooltipProps['placement']
}

const locales: ILocales[] = [
  { locale: LOCALES.ja_JP, value: '日本語' },
  { locale: LOCALES.en_US, value: 'English' },
]

function DrawerLanguage({ className, title, placement }: IProps) {
  const [open, setOpen] = useState<DrawerProps['open']>(false)
  const { t } = useTranslation()
  const { locale, toggleLocale } = useLocale()

  return (
    <div className={className}>
      <Tooltip title={title} placement={placement}>
        <LanguageSVG
          className="text-20"
          style={{ cursor: 'pointer' }}
          onClick={() => setOpen(true)}
        />
      </Tooltip>

      <Drawer
        title={t<string>('common:language')}
        width={300}
        placement="right"
        className={clsx(styles.drawerLanguage)}
        open={open}
        onClose={() => setOpen(false)}>
        <p>{t<string>('common:select_language')}</p>
        <ul className={clsx(styles.wrapper)}>
          {locales.map((lang: ILocales) => (
            <li
              role="presentation"
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
