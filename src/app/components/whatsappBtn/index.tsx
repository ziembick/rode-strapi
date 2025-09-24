"use client";

import React, { useCallback, useEffect, useState } from "react";
import { TbArrowNarrowUp } from "react-icons/tb";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import styles from "./whats.module.sass";
import { FaWhatsapp } from "react-icons/fa";
import { sendGAEvent, sendGTMEvent } from "@next/third-parties/google";

export default function WhatsAppBtn() {
  // const [show, setShow] = useState(false);

  const handleClick = () => {

    sendGTMEvent({event: 'lead_wpp_flutuante', value: "Lead do whatsapp flutuante"});
    sendGAEvent({event: 'lead_wpp_flutuante', value: "Lead do whatsapp flutuante"})


    const whatsappUrl = `https://wa.me/5511970997779?text=Olá, gostaria de agendar uma consulta!`;
    window.open(whatsappUrl, "_blank");
  };

  // const handleScroll = useCallback(() => {
  //   if (!show && window.scrollY > 1) setShow(true);
  //   if (show && window.scrollY <= 100) setShow(false);
  // }, [show]);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [handleScroll]);

  return (
    <AnimatePresence>
        <motion.div
          className={styles.motionDiv}
          initial={{ opacity: 0, right: -10 }}
          animate={{ opacity: 1, right: 16 }}
          exit={{ opacity: 0, right: -10 }}
        >
          <button onClick={handleClick} className={styles.btn}>
            WhatsApp <FaWhatsapp size={30} />
          </button>
        </motion.div>
    </AnimatePresence>
  );
}
