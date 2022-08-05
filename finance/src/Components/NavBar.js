import styles from './NavBar.module.css'

function NavBar() {
    return (
        <div className={styles.navbar}>
            <h1 className={styles.navbarTitle}>Controle Financeiro</h1>
        </div>
    )   
}

export default NavBar