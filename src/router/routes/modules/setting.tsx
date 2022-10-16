import { Outlet, RouteObject } from 'react-router-dom';

import Default from '@/layouts/Default/Default';
import Staff from '@/pages/Setting/Staff/Staff';
import StaffEdit from '@/pages/Setting/Staff/StaffEdit';
import StaffNew from '@/pages/Setting/Staff/StaffNew';
import WrapperRoute from '@/router/guards/WrapperRoute';

const setting: RouteObject = {
  path: 'setting',
  element: <Default />,
  children: [
    {
      path: 'staff',
      element: <WrapperRoute element={<Staff />} title="title:staff" guard="auth" auth />,
    },
    {
      path: 'staff/new',
      element: (
        <WrapperRoute element={<StaffNew />} title="title:staff_new" guard="auth" auth />
      ),
    },
    {
      path: 'staff/:id/edit',
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
};

export default setting;
