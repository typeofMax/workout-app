//@Libs
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import useAuth from './core/hooks/useAuth';
//@Helpers
import { routes } from './routes/routes';
import Page404 from './pages/Page404/Page404';

const AppRouter = () => {
  const { isAuth } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => {
          if (route.private && !isAuth) {
            return false;
          }
          return (
            <Route
              path={route.path}
              element={<route.element />}
              key={`_id${route.path}`}
            />
          );
        })}
        <Route path='*' element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
