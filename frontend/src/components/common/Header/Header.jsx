//@Libs
import { useLocation, useNavigate } from 'react-router-dom';
//@Components
import Hamburger from './Hamburger/Hamburger';
//@Helpers
import useAuth from '../../../core/hooks/useAuth';
//@Styles
import styles from './Header.module.scss';
//@Images
import user from '../../../assets/images/header/user.svg';
import arrow from '../../../assets/images/header/arrow.svg';
import dumbbell from '../../../assets/images/header/dumbbell.svg';

const Header = () => {
  const { isAuth } = useAuth();

  let { pathname } = useLocation();
  let navigate = useNavigate();

  return (
    <div className={styles.header}>
      {pathname !== '/' ? (
        <>
          <button
            className={styles.header__button}
            onClick={() => navigate(-1)}
          >
            <img src={arrow} alt='Arrow back' draggable={false} />
          </button>
        </>
      ) : (
        <>
          <button
            className={styles.header__button}
            onClick={() => navigate(isAuth ? 'profile' : 'authorization')}
          >
            <img
              src={isAuth ? dumbbell : user}
              alt={isAuth ? 'Go to profile button' : 'Authorization button'}
              width='40px'
              height='40px'
              draggable={false}
            />
          </button>
        </>
      )}
      {isAuth && <Hamburger />}
    </div>
  );
};

export default Header;
