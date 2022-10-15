import { ItemType } from 'antd/es/menu/hooks/useItems';
import { useTranslation } from 'react-i18next';

import { ReactComponent as AccountSvg } from '@/assets/menu/account.svg';
import { ReactComponent as DashboardSvg } from '@/assets/menu/dashboard.svg';
import { ReactComponent as DocumentationSvg } from '@/assets/menu/documentation.svg';
import { ReactComponent as GuideSvg } from '@/assets/menu/guide.svg';
import { ReactComponent as PermissionSvg } from '@/assets/menu/permission.svg';

const { t } = useTranslation();

const mockMenuList: ItemType[] = [
  {
    label: t('common:dashboard'),
    icon: <DashboardSvg />,
    key: '/dashboard',
  },

  {
    label: 'test',
    icon: <PermissionSvg />,
    key: '/business',
    children: [
      {
        label: 'test',
        key: '/business/basic',
      },
      {
        label: 'test',
        key: '/business/with-search',
      },
      {
        label: 'test',
        key: '/business/with-aside',
      },
    ],
  },
];

export default mockMenuList;
