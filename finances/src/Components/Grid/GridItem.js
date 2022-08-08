import {BiUpArrowAlt, BiDownArrowAlt} from 'react-icons/bi'
import {AiOutlineDelete} from 'react-icons/ai'
import styles from './GridItem.module.css'

function GridItem({item, icon}){
    
    return (
        <tr className={styles.tr}>
            <td className={styles.desc}>{item.amount}</td>
            <td>{item.desc}</td>
            <td className={styles.alin}>{icon ? <BiUpArrowAlt/> : <BiDownArrowAlt/>}</td>
            <td className={styles.delete}><AiOutlineDelete /></td>
        </tr>
    )
}

export default GridItem