import styles from "./Form.module.css";
import { useState } from "react";

function Form() {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState(0);
  const [radio, setRadio] = useState(true);

  const generateID = () => Math.round(Math.random() * 1000);
  let url;
  if(radio === true) {
    url = "http://localhost:5000/entrada"
  } else {
    url = "http://localhost:5000/saida"
  }

  function handleSubmit() {
    fetch(url, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({id: generateID, amount, desc})
    })
  }

  return (
    <form>
      <div className={styles.inputContent}>
        <label htmlFor="desc">Descrição: </label>
        <input
          type="text"
          name="desc"
          id="desc"
          onChange={(e) => setDesc(e.target.value)}
        />
      </div>
      <div className={styles.inputContent}>
        <label htmlFor="value">Valor: </label>
        <input
          type="number"
          name="value"
          id="value"
          onChange={(e) => Number(setAmount(e.target.value))}
        />
      </div>
      <div className={styles.radioContent}>
        <input
          type="radio"
          name="group1"
          defaultChecked
          id="entrada"
          onChange={() => setRadio(!radio)}
        />
        <label htmlFor="entrada">Entrada</label>
        <input
          type="radio"
          name="group1"
          id="saida"
          onChange={() => setRadio(!radio)}
        />
        <label htmlFor="saida">Saida</label>
      </div>
      <button onClick={handleSubmit}>Adicionar</button>
    </form>
  );
}

export default Form;
