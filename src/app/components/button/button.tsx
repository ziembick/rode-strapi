import React from "react";
import styles from "./button.module.sass";
import Link from "next/link";

export const iconType = {
  ARROW_RIGHT: "ARROW_RIGHT",
};

const Button = (props: any) => {
  if (props.href) {
    return (
      <Link href={props.href} className={styles.button}>
        {props.children}
        <Button.Icon iconType={props.icon}/>
      </Link>
    );
  }

  return <button className={styles.button}>{props.children}</button>;
};

// eslint-disable-next-line react/display-name
Button.Icon = ({ iconType }: any) => {
  if (iconType === "ARROW_RIGHT") {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
        <path fill="currentColor" d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
      </svg>
    );
  }
  return null;
};

export default Button;
