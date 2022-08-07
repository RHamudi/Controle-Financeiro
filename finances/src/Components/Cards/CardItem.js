import styles from './CardItem.module.css'

function CardItem({title, icon, value}) {
    return (
        <div className={styles.containerItem}>
            <header className={styles.headerItem}>
                <h1>{title}</h1>
                {icon}
            </header>
            <span>{value}</span>
        </div>
    )
}

export default CardItem