import { RouteObject } from 'react-router-dom';

import CreateStaff from '@/pages/Setting/Staff/CreateStaff';
import EditStaff from '@/pages/Setting/Staff/EditStaff';
import Staff from '@/pages/Setting/Staff/Staff';
import { BaseLayout, DefaultLayout } from '@/router/constant';
import WrapperRoute from '@/router/guards/WrapperRoute';

const setting: RouteObject = {
  path: 'setting',
  element: <DefaultLayout />,
  children: [
    {
      path: 'staff',
      element: <BaseLayout />,
      children: [
        {
          path: '',
          index: true,
          element: (
            <WrapperRoute element={<Staff />} title="title:staff" guard="auth" auth />
          ),
        },
        {
          path: 'new',
          element: (
            <WrapperRoute
              element={<CreateStaff />}
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
              element={<EditStaff />}
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
