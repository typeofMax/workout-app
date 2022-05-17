//@Libs
import { useState } from 'react';
//@Components
import AppRouter from '../components/AppRouter';
//@Helpers
import { AuthContext } from '../contexts/AuthContext';

const AppProvider = () => {
  const [isAuth, setIsAuth] = useState(!!localStorage.getItem('token'));

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      <AppRouter />
    </AuthContext.Provider>
  );
}

export default AppProvider