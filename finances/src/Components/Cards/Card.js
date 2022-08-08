import styles from "./Card.module.css";
import CardItem from "./CardItem";
import { BiUpArrowAlt, BiDownArrowAlt } from "react-icons/bi";
import { BsCurrencyDollar } from "react-icons/bs";
import { useEffect, useState } from "react";
function Card() {
  const [entradaValue, setEntradaValue] = useState("00");
  const [saidaValue, setSaidaValue] = useState("00");

  const totalValue = entradaValue + saidaValue

  useEffect(() => {
    fetch("http://localhost:5000/entrada", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setEntradaValue(data.map((item) => Number(item.amount)).reduce((prev, current)=> prev + current))
      });
    fetch("http://localhost:5000/saida", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
       setSaidaValue(data.map((item) => Number(item.amount)).reduce((prev, current)=> prev + current));
      });
  }, []);

  return (
    <div className={styles.containerCard}>
      <CardItem
        title="Entradas"
        icon={<BiUpArrowAlt />}
        value={`R$ ${entradaValue}`}
      />
      <CardItem
        title="Saidas"
        icon={<BiDownArrowAlt />}
        value={`R$ ${saidaValue}`}
      />
      <CardItem title="Total" icon={<BsCurrencyDollar />} value={totalValue} />
    </div>
  );
}

export default Card;
