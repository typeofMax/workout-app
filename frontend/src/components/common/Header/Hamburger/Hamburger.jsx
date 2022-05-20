//@Libs
import cn from 'classnames';
import { NavLink } from 'react-router-dom';
//@Helpers
import { menuBase } from './menuBase';
import useAuth from '../../../../core/hooks/useAuth';
import useOutsideClick from '../../../../core/hooks/useOutsideClick';
//@Styles
import styles from './Hamburger.module.scss';
//@Images
import menu from '../../../../assets/images/header/menu.svg';
import menuClose from '../../../../assets/images/header/hamburger-close.svg';

const Hamburger = () => {
  const { ref, isComponentVisible, setIsComponentVisible } = useOutsideClick(false);
  const {setIsAuth} = useAuth();

  const logoutHandler = () => {
    localStorage.removeItem('token');
    setIsAuth(false);
    setIsComponentVisible(false);
  }

  return (
    <div className={styles.wrapper} ref={ref}>
      <button onClick={() => setIsComponentVisible(!isComponentVisible)}>
        <img src={isComponentVisible ? menuClose : menu} alt='Menu' />
      </button>
      <nav
        className={cn(styles.nav, { [styles.nav_active]: isComponentVisible })}
      >
        <ul className={styles.list}>
          {menuBase.map((item) => {
            return (
              <li className={styles.item} key={item.title}>
                <NavLink
                  className={({ isActive }) =>
                    cn(styles.link, { [styles['link-active']]: isActive })
                  }
                  to={item.path}
                >
                  {item.title}
                </NavLink>
              </li>
            );
          })}
          <button className={styles.button} onClick={logoutHandler}>
            Logout
          </button>
        </ul>
      </nav>
    </div>
  );
};

export default Hamburger;
