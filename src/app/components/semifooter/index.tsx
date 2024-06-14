import Image from "next/image";
import React from "react";
import styles from "./semifooter.module.sass";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { GrInstagram } from "react-icons/gr";

export default function SemiFooter() {
  return (
    <div className={styles.bgContainer}>
      <div className={`${styles.semifooter} container mt-10 mb-30`}>
        <div className={styles.imageContainer}>
          <Image
            src="/logoSemiFooterVerde.svg"
            alt="Logo"
            width={210}
            height={103}
            className={styles.imageSemiFooter}
          />
        </div>
        <div className={styles.textContainer}>
          <div>
            <h4 className={styles.title}>Formas de contato</h4>
            <div className={styles.contactItem}>
              <FaWhatsapp size={20} />
              <p className={styles.formas}>(11) 97099-7779</p>
            </div>
            <div className={styles.contactItem}>
              <MdOutlineEmail size={20} />
              <p className={styles.formas}>rodeziembick@gmail.com</p>
            </div>
            <div className={styles.contactItem}>
            <GrInstagram size={20}/>
              <p className={styles.formas}>@rodeziembick</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
