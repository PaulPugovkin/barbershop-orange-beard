import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section id="hero" className={styles.hero}>
            <div className={styles.heroWrapper}>
                <div className={styles.heroImage}></div>
                <div className={styles.heroDescription}>
                    <h2>Barbershop</h2>
                    <h1>
                        Orange <span className={styles.beard}>beard</span>
                    </h1>
                    <p className={styles.heroText}>
                        У нас создают образы, которые подчеркнут Вашу
                        уникальность, мужественность и стиль.
                    </p>
                    <button className={styles.orderButton}>
                        Запись онлайн
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
