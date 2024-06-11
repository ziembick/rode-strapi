import React from "react";
import BookAppointment from "../components/BookApointment";
import styles from "./contato.module.sass";
import BtnAgende from "../components/btnAgende";
import { motion } from "framer-motion";

const Contato = () => {
  return (
    <div className={styles.bgContainer}>
      <div className={`${styles.contatoContainer} container`}>
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 30,
            delay: 0.2,
          }}
        >
          Contato
        </motion.h1>
        <div>
          <BookAppointment />
        </div>
      </div>
    </div>
  );
};

export default Contato;
