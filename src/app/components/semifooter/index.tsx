import Image from "next/image";
import React from "react";
import styles from "./semifooter.module.sass";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { GrInstagram } from "react-icons/gr";
import Link from "next/link";

export default function SemiFooter() {
  const recipient = "rodeziembick@gmail.com";
  const subject = "Agendar consulta";
  const body = "Gostaria de agendar uma consulta";

  const handleEmailClick = () => {
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.open(gmailLink, "_blank");
  };

  const handleInstaClick = () => {
    const instaLink = "https://www.instagram.com/rodeziembick/";
    window.open(instaLink, "_blank");
  };

  const handleWpp = () => {
    const wppLink =
      "https://wa.me/5511970997779?text=Olá, gostaria de agendar uma consulta!";
    window.open(wppLink, "_blank");
  };

  return (
    <div className={styles.bgContainer}>
      <div className={`${styles.semifooter} container mt-10 mb-30`}>
        <div className={styles.imageContainer}>
          <Image
            src="./logoSemiFooterVerde.svg"
            alt="Logo"
            width={110}
            height={90}
            className={styles.imageSemiFooter}
          />
        </div>
        <div className={styles.textContainer}>
          <div>
            <h4 className={styles.title}>Formas de contato</h4>

            <div className={styles.contactItem} onClick={handleWpp}>
              <FaWhatsapp size={20} />
              <p className={styles.formas}>(11) 97099-7779</p>
            </div>

            <div className={styles.contactItem} onClick={handleEmailClick}>
              <MdOutlineEmail size={20} />
              <p className={styles.formas}>rodeziembick@gmail.com</p>
            </div>

            <div className={styles.contactItemInsta} onClick={handleInstaClick}>
              <GrInstagram size={17} />
              <p className={styles.formas}>@rodeziembick</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
