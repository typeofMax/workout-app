//@Libs
import { useLocation, useNavigate } from 'react-router-dom';
//@Components
import Hamburger from './Hamburger/Hamburger';
//@Styles
import styles from './Header.module.scss';
//@Images
import user from '../../../images/header/user.svg';
import arrow from '../../../images/header/arrow.svg';

const Header = () => {
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
            <img src={arrow} alt='Arrow back' />
          </button>
          <Hamburger />
        </>
      ) : (
        <>
          <button
            className={styles.header__button}
            onClick={() => navigate('authorization')}
          >
            <img src={user} alt='Authorization button' />
          </button>
          <Hamburger />
        </>
      )}
    </div>
  );
};

export default Header;
