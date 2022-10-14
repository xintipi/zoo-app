import { AlignRightOutlined } from '@ant-design/icons';
import { Drawer, DrawerProps } from 'antd';
import clsx from 'clsx';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { LOCALES } from '@/enums';

import styles from './DrawerLanguage.module.scss';

interface ILocales {
  locale: string;
  value: string;
}

interface IProps {
  className: string;
}

const locales: ILocales[] = [
  { locale: LOCALES.ja_JP, value: '日本語' },
  { locale: LOCALES.en_US, value: 'English' },
];

function DrawerLanguage({ className }: IProps) {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState<DrawerProps['open']>(false);

  const onChangeLocales = (locale: string) => {
    i18n.changeLanguage(locale).then((r) => r);
  };

  return (
    <div className={className}>
      <AlignRightOutlined style={{ fontSize: '20px' }} onClick={() => setOpen(true)} />

      <Drawer
        title={t('common:language')}
        width={300}
        placement="right"
        className={clsx(styles.drawerLanguage)}
        open={open}
        onClose={() => setOpen(false)}
      >
        <p className="fs-13">{t('common:select_language')}</p>
        <ul className={clsx(styles.wrapper, 'pl-0')}>
          {locales.map((lang: ILocales) => (
            <li
              role="presentation"
              key={lang.locale}
              className={clsx('px-5', 'py-5', { active: i18n.language === lang.locale })}
              onClick={() => onChangeLocales(lang.locale)}
            >
              {lang.value}
            </li>
          ))}
        </ul>
      </Drawer>
    </div>
  );
}

export default DrawerLanguage;
