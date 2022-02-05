import styles from './Header.module.css';
import { ReactComponent as Logo } from '../../Images/logo.svg';
import { ReactComponent as Twitter } from '../../Images/Icons/twitter.svg';
import { ReactComponent as Instagram } from '../../Images/Icons/instagram.svg';
import { ReactComponent as Vk } from '../../Images/Icons/vk.svg';

const Header = () => {
    return (
        <div className={styles.headerWrapper}>
            <header className={styles.header}>
                <div>
                    <a href="#">
                        <Logo />
                    </a>
                </div>
                <nav>
                    <ul className={styles.menuList}>
                        <li>
                            <a href="#">Главная</a>
                        </li>
                        <li>
                            <a href="#">О нас</a>
                        </li>
                        <li>
                            <a href="#">Услуги</a>
                        </li>
                        <li>
                            <a href="#">Мастера</a>
                        </li>
                        <li>
                            <a href="#">Отзывы</a>
                        </li>
                        <li>
                            <a href="#">Контакты</a>
                        </li>
                    </ul>
                </nav>
                <ul className={styles.socialMenu}>
                    <li>
                        <a href="#">
                            <Twitter />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <Instagram />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <Vk />
                        </a>
                    </li>
                </ul>
            </header>
        </div>
    );
};

export default Header;
