import clsx from 'clsx';
import React from 'react';

import DrawerLanguage from '@/components/DrawerLanguage/DrawerLanguage';

import styles from './Login.module.scss';

function Login() {
  return (
    <div
      className={clsx(styles.login, 'd-flex', 'align-items-center', 'position-relative')}
    >
      <DrawerLanguage className={clsx(styles.iconDrawer)} />

      <div className={clsx(styles.containerTight, 'py-6')}>form</div>
    </div>
  );
}

export default Login;
