'use client'
import React, { useState, useEffect, useRef } from "react";
import BookAppointment from "../components/BookApointment";
import styles from "./contato.module.sass";
import BtnAgende from "../components/btnAgende";
import { motion } from "framer-motion";

const Contato = () => {
  const [isVisible, setIsVisible] = useState(false);
  const contatoRef = useRef<any>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (contatoRef.current) {
        const topPos = contatoRef.current.getBoundingClientRect().top;
        const bottomPos = contatoRef.current.getBoundingClientRect().bottom;
        const isVisible = topPos < window.innerHeight && bottomPos >= 0;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Verificar a visibilidade no carregamento inicial
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.bgContainer}>
      <div ref={contatoRef} className={`${styles.contatoContainer} container`}>
        {isVisible && (
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
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
        )}
        <div>
          <BookAppointment />
        </div>
      </div>
    </div>
  );
};

export default Contato;
