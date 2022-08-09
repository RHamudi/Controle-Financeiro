import styles from "./Grid.module.css";
import GridItem from "./GridItem";
import { useEffect, useState } from "react";

function Grid() {
    const [entradas, setEntradas] = useState([]);
    const [saidas, setSaidas] = useState([])

  useEffect(()=> {
    fetch("http://localhost:5000/entrada", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((resp) => resp.json())
    .then((data) => {
      setEntradas(data);
    });

    fetch("http://localhost:5000/saida", {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((resp) => resp.json())
    .then((data) => {
      setSaidas(data);
    });
  }, [])

  return (
    <table className={styles.div}>
      <thead>
        <th width={40}>Descrição</th>
        <th width={40}>Valor</th>
        <th width={10} className={styles.alin}>tipo</th>
        <th width={10}></th>
      </thead>
      <tbody>
        {entradas.map((item)=> <GridItem item={item} icon={true}/>)}
        {saidas.map((item)=> <GridItem item={item} icon={false}/>)}
      </tbody>
    </table>
  );
}

export default Grid;
