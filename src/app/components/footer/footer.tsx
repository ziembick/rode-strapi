import React from "react";
import styles from "./footer.module.sass";
import { FaRegHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <hr className="mb-10" />
        <div className={styles.textContainer}>
          <div>
            <p>
              &copy; 2024 – Todos os direitos reservados. Psicanalista Rode
              Ziembick.
            </p>
          </div>
          <div>
            <p>
              criado com <FaRegHeart size={13} /> por Zoio Brands
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
