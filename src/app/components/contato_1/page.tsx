'use client'
import React, { useState, useEffect, useRef } from "react";
import BookAppointment from "../BookApointment";
import styles from "./contato.module.sass";
import Image from "next/image";

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
     <Image
        src="./bgAtencao2.svg"
        alt="Background"
        layout="fill"
        objectFit="cover"
        className={styles.backgroundImage}
      />
      <div ref={contatoRef} className={`${styles.contatoContainer} container`}>
        {isVisible && (
          <h1
            className={styles.title}
   
          >
            Contato
          </h1>
        )}
        <div>
          <BookAppointment />
        </div>
      </div>
    </div>
  );
};

export default Contato;
