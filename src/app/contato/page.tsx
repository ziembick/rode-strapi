import React from "react";
import BookAppointment from "../components/BookApointment";
import styles from "./contato.module.sass";
import BtnAgende from "../components/btnAgende";

const Contato = () => {
  return (
    <div className={styles.bgContainer}>
      <div className={`${styles.contatoContainer} container`}>
        <h1 className={styles.title}>Contato</h1>
        <div>
          <BookAppointment />
        </div>
        <div>
          <p></p>
          <p>Ou via WhatsApp</p>
        </div>
        <BtnAgende />
      </div>
    </div>
  );
};

export default Contato;
