import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const useAuth = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  return {
    isAuth,
    setIsAuth,
  };
};

export default useAuth;
