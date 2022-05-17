//@Libs
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
//@Helpers
import { routes } from '../routes/routes';

const AppRouter = () => {
  const { isAuth } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => {
          // if (route.private && isAuth) {
          //   return null;
          // }

          return (
            <Route
              path={route.path}
              element={<route.element />}
              key={route.path}
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
