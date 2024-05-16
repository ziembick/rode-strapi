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
        <div className={`${styles.card_label} h6 mb-10 c-orange`}>Product Reviews</div>
        <div className={`${styles.card_title} h3 mb-20`}>Class aptent tacicti socisqui ad litora tornequent per conubia nostra</div>
        <p className={`${styles.card_summary} fw-600`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est similique aliquid suscipit facilis magnam deserunt quibusdam quidem nulla! Quia, ipsum.</p>
      </div>
    </div>
  );
}
