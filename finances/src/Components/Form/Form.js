import styles from "./Form.module.css";
import { useState } from "react";

function Form() {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState(0);
  const [radio, setRadio] = useState(true);

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
          onChange={(e) => setAmount(e.target.value)}
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
      <button>Adicionar</button>
    </form>
  );
}

export default Form;
