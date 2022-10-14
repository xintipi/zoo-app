import { Suspense } from 'react';

import { history, HistoryRouter } from '@/router/history';
import RenderRouter from '@/router/routes';

function App() {
  return (
    <HistoryRouter history={history}>
      <Suspense fallback={null}>
        <RenderRouter />
      </Suspense>
    </HistoryRouter>
  );
}

export default App;
