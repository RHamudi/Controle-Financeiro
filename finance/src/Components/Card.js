import styles from './Card.module.css'


function Card({title, img}) {
    return (
        <section className={styles.mainCard}>
            <div className={styles.cardInfo}>
            <h3 className={styles.titleCard}>{title}</h3>
            <div className={styles.iconCard}>{img}</div>
            </div>
            <p className={styles.cardValue}>R$ 1500</p>
        </section>
    )
}

export default Card