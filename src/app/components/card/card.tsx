import React from "react";
import styles from "./card.module.sass";
import Image from "next/image";
import Button from "../button/button";
import ConditionalRenderer from "../conditional-renderer";
import getCategoryColor from "@/helpers/get-category-color";

export default function Card(props: any) {
  return (
    <div className={`${styles.card_wrap} ${styles.className || ""}`}>
      <div className={styles.card}>
        <div className={styles.card_imageWrapper}>
          <div className={styles.card_image}>
            <Image alt={props.imgAlt} src={props.imgSrc} fill={true}/>
          </div>
        </div>
        <div className={styles.card_content}>
          <ConditionalRenderer condition={props.label}>
            <div className={`${styles.card_label} h6 mb-10 c-${getCategoryColor(props.label)}`}>
              {props.label}
            </div>
          </ConditionalRenderer>
          <ConditionalRenderer condition={props.title}>
            <div className={`${styles.card_title} h3 mb-20`}>{props.title}</div>
          </ConditionalRenderer>
          <ConditionalRenderer condition={props.summary}>
            <p className={`${styles.card_summary} fw-600`}>{props.summary}</p>
          </ConditionalRenderer>
          <ConditionalRenderer condition={props.href}>
            <Button href={props.href} icon={props.btnIcon}>
              {props.btnLabel || 'Read More'}
            </Button>
          </ConditionalRenderer>
        </div>
      </div>
    </div>
  );
}
