//@Libs
import cn from 'classnames';
import { useLocation } from 'react-router-dom';
//@Components
import Header from './Header/Header';
//@Styles
import styles from './Layout.module.scss';

const Layout = ({ children, bgImage, height = '356px', heading }) => {
  let { pathname } = useLocation();

  return (
    <div
      className={cn(styles.wrapper, {
        [styles['other-page']]: pathname !== '/',
      })}
      style={{ backgroundImage: `url(${bgImage})`, height: height }}
    >
      <Header />
      <div className={styles.container}>
        <h1 className={styles.heading}>{heading}</h1>
        {children}
      </div>
    </div>
  );
};

export default Layout;
