import React from "react";
import { CiMapPin, CiPhone } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import styles from "./ContactInfo.module.css";

function ContactInfo() {
  return (
    <div className={styles["contact-info"]}>
      <div className={styles["contact-info-item"]}>
        <div className={styles["icon"]}>
          <CiMapPin />
        </div>
        <div className={styles["content"]}>
          <h4 className={styles["title"]}>Address</h4>
          <p className={styles["body"]}>Pune,India</p>
        </div>
      </div>
      <div className={styles["contact-info-item"]}>
        <div className={styles["icon"]}>
          <CiMail />
        </div>
        <div className={styles["content"]}>
          <h4 className={styles["title"]}>Email</h4>
          <p className={styles["body"]}>shivam.gote2107@gmail.com</p>
        </div>
      </div>


      <div className={styles["contact-info-item"]}>
      <div className={styles["icon"]}>
        <CiPhone />
      </div>
      <div className={styles["content"]}>
        <h4 className={styles["title"]}>Contact No.</h4>
        <p className={styles["body"]}>+91 9921363500</p>
      </div>
    </div>


    </div>
  );
}

export default ContactInfo;
