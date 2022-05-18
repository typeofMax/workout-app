//@Pages
import Home from '../pages/Home/Home';
import NewWorkout from '../pages/NewWorkout/NewWorkout';
import Auth from '../pages/Auth/Auth';

export const routes = [
  {
    path: '/',
    element: Home,
    private: false,
  },
  {
    path: 'authorization',
    element: Auth,
    private: false,
  },
  {
    path: 'new-workout',
    element: NewWorkout,
    private: true,
  },
];
