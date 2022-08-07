import styles from './Card.module.css'

function Card({title, icon}) {
    return (
        <section>
            <div className={styles.cardMain}>
                <h1 className={styles.title}>{title}</h1>
                <span className={styles.icon}>{icon}</span>
            </div>
            <p className={styles.value}>R$ 1600.00</p>
        </section>
    )
}

export default Card