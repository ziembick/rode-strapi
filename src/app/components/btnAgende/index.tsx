"use client";

import Image from "next/image";
import React from "react";
import styles from "./btn.module.sass";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { sendGTMEvent } from '@next/third-parties/google'
import { sendGAEvent } from '@next/third-parties/google'

export default function BtnAgende() {
  return (
    <>
      <motion.button
        whileHover={{
          scale: 1.03,
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 0.9 }}
        className={styles.btn}
        onClick={() => {
          // Send the GTM event before opening the WhatsApp URL
          sendGTMEvent({event: 'lead_wpp', value: "Lead do whatsapp"});
          sendGAEvent({event: 'lead_wpp', value: "Lead do whatsapp"})

          const whatsappUrl = `https://www.doctoralia.com.br/rode-ziembick/psicanalista/sao-paulo`;
          window.open(whatsappUrl, "_blank");
        }}
      >
        Agende sua consulta
        <FaWhatsapp size={20} className={styles.btnWp} />
      </motion.button>
    </>
  );
}
