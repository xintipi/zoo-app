import { RouteObject } from 'react-router-dom';

import Error403 from '@/pages/Error403/Error403';
import WrapperRoute from '@/router/guards/WrapperRoute';

const forbiddenPage: RouteObject = {
  path: '403',
  element: <WrapperRoute title="title:403" element={<Error403 />} />,
};

export default forbiddenPage;
