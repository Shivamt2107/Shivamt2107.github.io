

import React from "react";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import styles from "./Footer.module.css";

function Footer() {
  const year = () => {
    const d = new Date();
    let y = d.getFullYear();
    return y;
  };

  return (
    <div className={styles.footer}>
      <div>
        <a
          className={styles.socialIcon}
          href="https://github.com/Shivamt2107"
          target="_blank"
        >
          <FiGithub />
        </a>
        <a
          className={styles.socialIcon}
          href="https://www.linkedin.com/in/shivam-gote/"
          target="_blank"
        >
          <FiLinkedin />
        </a>
        <a
          className={styles.socialIcon}
          href="https://www.instagram.com/"
          target="_blank"
        >
          <FiInstagram />
        </a>
      </div>

      <p class="copyright">
        © <span class="year">{year()}</span> -{" "}
        <span class="bold"> Shivam Gote</span>
      </p>
    </div>
  );
}

export default Footer;
