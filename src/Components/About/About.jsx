import styles from './About.module.css';
import { ReactComponent as ReadMore } from '../../Images/read-more-arrow.svg';

const About = () => {
    return (
        <section id="about" className={styles.about}>
            <div className={styles.aboutWrapper}>
                <div className={styles.aboutImage}></div>
                <div className={styles.aboutDescription}>
                    <h2 className={styles.aboutTitle}>О нас</h2>
                    <p>
                        Orange beard - это больше чем барбершоп, это мужской
                        клуб. Наши барберы, настоящие профессионалы своего дела.
                        Сделают стрижку, укладку, оформление бороды и другое, в
                        том стиле, который Вам захочется.А если Вы не знаете,
                        что хотите, то наши мастера подскажут и
                        посоветуют.Помимо качественных услуг, Вы можете просто
                        отдохнуть, попить кофе, чай или чего- то покрепче.
                        Пообщаться с мастерами или другими посетителями нашего
                        мужского клуба. Посмотреть YouTube, почитать, поиграть в
                        PS.
                    </p>
                    <button>
                        Читать далее <ReadMore width="10" height="16" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default About;
