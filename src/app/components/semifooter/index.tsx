import Image from "next/image";
import React from "react";
import styles from "./semifooter.module.sass";

export default function SemiFooter() {
  return (
    <div className={styles.bgContainer}>
      <div className={`${styles.semifooter} container mt-10 mb-30`}>
        <div className={styles.imageContainer}>
          <Image
            src="/logoFooterRode.svg"
            alt="Logo"
            width={276}
            height={136}
            layout="responsive"
          />
        </div>
        <div className={styles.textContainer}>
          <div>
            <h4 className={styles.title}>Formas de contato</h4>
            <div className={styles.contactItem}>
              <Image
                src="/whatsapp.svg"
                alt="Whatsapp"
                width={20}
                height={20}
                className={styles.icon}
              />
              <p className={styles.formas}>(11) 98765-4321</p>
            </div>
            <div className={styles.contactItem}>
              <Image
                src="/email2.png"
                alt="Email"
                width={20}
                height={20}
                className={styles.icon}
              />
              <p className={styles.formas}>rodeziembick@gmail.com</p>
            </div>
            <div className={styles.contactItem}>
              <Image
                src="/ig2.svg"
                alt="Instagram"
                width={20}
                height={20}
                className={styles.icon}
              />
              <p className={styles.formas}>@rodeziembick</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
