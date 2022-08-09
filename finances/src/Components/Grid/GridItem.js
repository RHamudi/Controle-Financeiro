import {BiUpArrowAlt, BiDownArrowAlt} from 'react-icons/bi'
import {AiOutlineDelete} from 'react-icons/ai'
import styles from './GridItem.module.css'

function GridItem({item, icon}){
    const url = "http://localhost:5000/"
    let propsurl;
    if(icon === true) {
        propsurl = `entrada/${item.id}`
    } else {
        propsurl = `saida/${item.id}`
    }

    function handleDelete() {
        fetch(`${url}${propsurl}` , {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
        })
        document.location.reload()
    }

    return (
        <tr className={styles.tr}>
            <td className={styles.desc}>{item.desc}</td>
            <td className={styles.value}>{item.amount}</td>
            <td className={styles.alin}>{icon ? <BiUpArrowAlt className={styles.buttonGreen}/> : <BiDownArrowAlt className={styles.buttonRed}/>}</td>
            <td className={styles.delete}><AiOutlineDelete onClick={handleDelete} /></td>
        </tr>
    )
}

export default GridItem