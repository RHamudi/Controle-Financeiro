import styles from './Card.module.css'
import CardItem from './CardItem'
import {BiUpArrowAlt, BiDownArrowAlt} from 'react-icons/bi'
import {BsCurrencyDollar} from 'react-icons/bs'
function Card() {
    return (
        <div className={styles.containerCard}>
            <CardItem title="Entradas" icon={<BiUpArrowAlt />} value="R$ 2500.00"/>
            <CardItem title="Saidas" icon={<BiDownArrowAlt/>} value="R$ 2500.00" />
            <CardItem title="Total" icon={<BsCurrencyDollar />} value="R$ 00.00" />
        </div>
    )
}

export default Card