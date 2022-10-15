import { Outlet, RouteObject } from 'react-router-dom';

import Staff from '@/pages/Setting/Staff/Staff';
import StaffEdit from '@/pages/Setting/Staff/StaffEdit';
import StaffNew from '@/pages/Setting/Staff/StaffNew';
import { DefaultLayout } from '@/router/constant';
import WrapperRoute from '@/router/guards/WrapperRoute';

const setting: RouteObject = {
  path: 'setting',
  element: <DefaultLayout />,
  children: [
    {
      path: '',
      element: <Outlet />,
      children: [
        {
          path: 'staff',
          element: (
            <WrapperRoute element={<Staff />} title="title:staff" guard="auth" auth />
          ),
        },

        {
          path: 'new',
          element: (
            <WrapperRoute
              element={<StaffNew />}
              title="title:staff_new"
              guard="auth"
              auth
            />
          ),
        },

        {
          path: ':id/edit',
          element: (
            <WrapperRoute
              element={<StaffEdit />}
              title="title:staff_edit"
              guard="auth"
              auth
            />
          ),
        },
      ],
    },
  ],
};

export default setting;
