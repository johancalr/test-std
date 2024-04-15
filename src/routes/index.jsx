import { useRoutes } from 'react-router-dom';
import { TestA } from '../Pages/TestA';
import { TestB } from '../Pages/TestB';

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/',       element: <TestA/> },
    { path: '/test-a', element: <TestA/> },
    { path: '/test-b', element: <TestB/> },
    { path: '/*',      element: <TestA/> },
  ]);
  return routes;
};

export { AppRoutes };