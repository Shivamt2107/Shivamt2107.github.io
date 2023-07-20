import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import styles from "./Contact.module.css";


function Contact() {
  return (
    <section className={styles.contact_section} id="contact">
      <div className={styles.heading}>
        <h2 className={styles["title"]}>Contact Me</h2>
      </div>
      <div className={styles.container}>
        <div className={styles.left}>
          <ContactForm />
        </div>
        <div className={styles.right}>
          <ContactInfo />
        </div>
      </div>
    </section>
  );
}

export default Contact;
