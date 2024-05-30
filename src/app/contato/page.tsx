import React from "react";
import BookAppointment from "../components/BookApointment";
import styles from "./contato.module.sass";

const Contato = () => {
  return (
    <div className="container">
      <h1 className={styles.contato}>Contato</h1>
      <div>
        <BookAppointment />
      </div>
    </div>
  );
};

export default Contato;
