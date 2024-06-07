import React from "react";
import BookAppointment from "../components/BookApointment";
import styles from "./contato.module.sass";

const Contato = () => {
  return (
    <div className={styles.bgContainer}>
      <div className={`${styles.contatoContainer} container`}>
        <div>
          <BookAppointment />
        </div>
      </div>
    </div>
  );
};

export default Contato;
