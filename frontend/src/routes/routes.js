//@Pages
import Home from '../components/pages/Home/Home';
import NewWorkout from '../components/pages/NewWorkout/NewWorkout';
import Auth from '../components/pages/Auth/Auth';

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
