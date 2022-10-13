import { RouteObject } from 'react-router-dom';

import Base from '@/layouts/Base/Base';
import Default from '@/layouts/Default/Default';
import CreateStaff from '@/pages/Setting/Staff/CreateStaff';
import EditStaff from '@/pages/Setting/Staff/EditStaff';
import Staff from '@/pages/Setting/Staff/Staff';
import WrapperRoute from '@/router/guards/WrapperRoute';

const setting: RouteObject = {
  path: 'setting',
  element: <Default />,
  children: [
    {
      path: 'staff',
      element: <Base />,
      children: [
        {
          path: '',
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
