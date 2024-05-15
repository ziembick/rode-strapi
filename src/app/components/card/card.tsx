import React from "react";
import styles from "./card.module.sass";
import Image from "next/image";

export default function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.card_imageWrapper}>
        <div className={styles.card_image}>
          <Image alt="thumbnail" src="/thumb.jpg" fill={true}/>
        </div>
      </div>
      <div className={styles.card_content}>
        <div className={styles.card_label}>Product Reviews</div>
        <div className={`${styles.card_title} h3`}>Class aptent tacicti socisqui ad litora tornequent per conubia nostra</div>
        <div className={styles.card_summary}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est similique aliquid suscipit facilis magnam deserunt quibusdam quidem nulla! Quia, ipsum.</div>
      </div>
    </div>
  );
}
