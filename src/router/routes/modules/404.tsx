import { RouteObject } from 'react-router-dom';

import Error404 from '@/pages/Error404/Error404';
import WrapperRoute from '@/router/guards/WrapperRoute';

const pageNotFound: RouteObject = {
  path: '404',
  element: <WrapperRoute title="title:404" element={<Error404 />} />,
};

export default pageNotFound;
