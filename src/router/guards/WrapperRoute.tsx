import { FC, ReactElement, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

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

  const component = useMemo(() => {
    return {
      login: <LoginGuard {...props} />,
      auth: <AuthGuard {...props} />,
    };
  }, [auth, guard]);

  if (title) {
    document.title = `${t(title)} | ${import.meta.env.VITE_APP_TITLE}`;
  }

  return auth
    ? component[guard as keyof typeof component]
    : (props.element as ReactElement);
};

export default WrapperRoute;
