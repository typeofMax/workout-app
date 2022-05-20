//@Pages
import Home from '../pages/Home/Home';
import NewWorkout from '../pages/NewWorkout/NewWorkout';
import Auth from '../pages/Auth/Auth';
import NewExercise from '../pages/NewExercise/NewExercise';
import Profile from '../pages/Profile/Profile';

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
    path: 'profile',
    element: Profile,
    private: true,
  },
  {
    path: 'new-workout',
    element: NewWorkout,
    private: true,
  },
  {
    path: 'new-exercise',
    element: NewExercise,
    private: true,
  },
];
