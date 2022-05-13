//@Styles
import styles from './Header.module.scss';

//@Images
import user from '../../../images/header/user.svg';
import menu from '../../../images/header/menu.svg';

const Header = () => {
    return (
        <div className={styles.header}>
            <button className={styles.header__button}>
                <img src={user} alt='Authorization' />
            </button>
            <button className={styles.header__button}>
                <img src={menu} alt='Menu' />
            </button>
        </div>
    );
};

export default Header;
