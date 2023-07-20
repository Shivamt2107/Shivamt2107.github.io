import React from "react";
import Education from "./Education";
import Work from "./Work";
import styles from "./Resume.module.css";

const Resume = () => {
  return (
    <section className={styles.resume_section} id="resume">
      <div className={styles.heading}>
        {/* <p className={styles["above-title"]}>Career Path</p> */}
        <h4 className={styles["title"]}>Education   and    Experience</h4>
      </div>
      <div className={styles.container}>
        <Education />
        <Work />
      </div>
    </section>
  );
};

export default Resume;
