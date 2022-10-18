import { Draft } from '@reduxjs/toolkit';
import { Breadcrumb as BreadcrumbComponent, BreadcrumbProps } from 'antd';
import { Route } from 'antd/es/breadcrumb/Breadcrumb';
import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom';

import { useRoutePath } from '@/hooks';
import { State } from '@/stores';

type BreadcrumbRoute = Route & {
  search?: string;
};

interface IRoute {
  [key: string]: BreadcrumbRoute[];
}

function Breadcrumb() {
  const { t } = useTranslation();
  const location = useLocation();
  const params = useParams();
  const { locale } = useSelector((state: Draft<State>) => state.global);
  const [routes, setRoutes] = useState<BreadcrumbRoute[]>([]);

  const staffMap: BreadcrumbRoute = useMemo(() => {
    return {
      path: '/setting/staff',
      breadcrumbName: t('title:staff'),
    };
  }, [locale]);

  const breadcrumbNameMap: IRoute = useMemo(() => {
    return {
      /* dashboard */
      '/dashboard': [
        {
          path: '/dashboard',
          breadcrumbName: t('title:dashboard'),
        },
      ],

      '/setting/staff': [staffMap],

      /* setting staff new */
      '/setting/staff/new': [
        staffMap,
        {
          path: '/setting/staff/new',
          breadcrumbName: t('title:staff_new'),
        },
      ],

      /* setting staff edit */
      '/setting/staff/:id/edit': [
        staffMap,
        {
          path: '/setting/staff/:id/edit',
          breadcrumbName: t('title:staff_edit'),
        },
      ],
    };
  }, [locale]);

  useEffect(() => {
    const path = useRoutePath(location, params);
    let filterRoute = breadcrumbNameMap[path];
    if (location.search && filterRoute.length > 0) {
      filterRoute[filterRoute.length - 1].search = location.search;
    }
    setRoutes(filterRoute);
  }, [location.pathname, locale]);

  const itemRender: BreadcrumbProps['itemRender'] = (
    route: BreadcrumbRoute,
    params,
    routes,
    paths
  ) => {
    const last = routes.indexOf(route) === routes.length - 1;
    const search = route.search ? route.search : '';
    return last ? (
      <span>{route.breadcrumbName}</span>
    ) : (
      <Link to={`${route.path}${search}`}>{route.breadcrumbName}</Link>
    );
  };

  return <BreadcrumbComponent itemRender={itemRender} routes={routes} />;
}

export default Breadcrumb;
