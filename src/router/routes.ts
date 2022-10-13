import { FC } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';

import { routeLists } from './routes/index';

const routeList: RouteObject[] = [...routeLists];

const RenderRouter: FC = () => {
  return useRoutes(routeList);
};

export default RenderRouter;
