import styles from './Benefits.module.css';
import { ReactComponent as Quality } from '../../Images/Benefits/quality.svg';
import { ReactComponent as Professionalism } from '../../Images/Benefits/professionalism.svg';
import { ReactComponent as Comfort } from '../../Images/Benefits/comfort.svg';
import { ReactComponent as Loyality } from '../../Images/Benefits/loyality.svg';

const Benefits = () => {
    return (
        <section id="benefits" className={styles.benefits}>
            <div className={styles.benefitsWrapper}>
                <h2 className={styles.benefitsTitle}>Преимущества</h2>
                <ul className={styles.benefitsList}>
                    <li className={styles.benetitsListItem}>
                        <div className={styles.benefitLogo}>
                            <Quality width="55" />
                        </div>
                        <h3 className={styles.benefitsItemTitle}>Качество</h3>
                        <p className={styles.benefitsItemText}>
                            У нас используется новое профессиональное
                            оборудование. Все инстументы тщательно
                            обрабатываются после каждого гостя.
                        </p>
                    </li>
                    <li className={styles.benetitsListItem}>
                        <div>
                            <Professionalism />
                        </div>
                        <h3 className={styles.benefitsItemTitle}>
                            Профессионализм
                        </h3>
                        <p className={styles.benefitsItemText}>
                            Наши мастера с большим опытом работы, постоянно
                            совершенствуются, проходят курсы повышения
                            квалификации. Умеют слушать и слышать.
                        </p>
                    </li>
                    <li className={styles.benetitsListItem}>
                        <div>
                            <Comfort />
                        </div>
                        <h3 className={styles.benefitsItemTitle}>Удобство</h3>
                        <p className={styles.benefitsItemText}>
                            Вы будете чувствовать себя максимально комфортно и
                            уютно. Мы стараемся найти индивидуальный подход к
                            каждому гостю.
                        </p>
                    </li>
                    <li className={styles.benetitsListItem}>
                        <div>
                            <Loyality />
                        </div>
                        <h3 className={styles.benefitsItemTitle}>
                            Система лояльности
                        </h3>
                        <p className={styles.benefitsItemText}>
                            Мы хотим что-бы каждый гость возращался снова и
                            снова. Поэтому предусмотрены различные акции и
                            скидки для новых и постоянных посетителей.
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Benefits;
