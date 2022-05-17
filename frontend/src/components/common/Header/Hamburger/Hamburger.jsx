//@Libs
import cn from 'classnames';
import { NavLink } from 'react-router-dom';
//@Styles
import styles from './Hamburger.module.scss';
//@Helpers
import { menuBase } from './menuBase';

import useOutsideClick from '../../../../hooks/useOutsideClick';
//@Images
import menu from '../../../../images/header/menu.svg';
import menuClose from '../../../../images/header/hamburger-close.svg';

const Hamburger = () => {
  
  const { ref, isComponentVisible, setIsComponentVisible } = useOutsideClick(false);

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
          <button className={styles.button} >
            Logout
          </button>
        </ul>
      </nav>
    </div>
  );
};

export default Hamburger;
