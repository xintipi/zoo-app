import { FC, ReactElement, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

import AuthGuard from './AuthGuard';
import LoginGuard from './LoginGuard';

interface WrapperRouteProps {
  element?: ReactElement;
  title?: string;
  auth?: boolean;
  guard?: string;
}

const WrapperRoute: FC<WrapperRouteProps> = ({ title, auth, guard, ...props }) => {
  const { t } = useTranslation();
  const location = useLocation();

  const component = useMemo(() => {
    return {
      login: <LoginGuard {...props} />,
      auth: <AuthGuard {...props} />,
    };
  }, [location.pathname]);

  useEffect(() => {
    if (title) {
      document.title = `${t(title)} | ${import.meta.env.VITE_APP_TITLE}`;
    }
  }, [title]);

  return auth
    ? component[guard as keyof typeof component]
    : (props.element as ReactElement);
};

export default WrapperRoute;
