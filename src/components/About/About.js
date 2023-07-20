import React from "react";
import styles from "./About.module.css";
import Skills from "./Skills";


const About = () => {
  return (
    <section className={styles.about_section} id="about">
      <div className={styles.heading}>
        <h2 className={styles["title"]}>About Me</h2>
      </div>
      <div className={styles.container}>
        <div className={styles.left}>
          <h3>Get to Know me!</h3>
          <p className={styles.desc}>
          My name's Shivam.
          I'm a full-stack web-developer based in Masai School, Benguluru.
          I am a B.com graduate in Insurance, love exploring new technologies
           in the field of Web Development and always try to adapt to it.I 
           believe in the concept of continuous learning by regularly upgrading 
           my skills and enhancing my knowledge.I have learned MERN stack, data 
           structures, algorithms, and soft skills at Masai School.And besides coding,
            I love traveling, singing and cooking As a developer, my hunger for 
            learning has drastically increased. And I want to centralize my skills 
            and learning for enhancement of an organization and more of it, to enhance 
            my career.
          </p>
          <p className={styles.desc}>
            I build web apps with a focus on React, Redux, JavaScript. I enjoy
            turning complex problems into simple and beautiful designs.
          </p>
        </div>
        <div className={styles.right}>
          {/* <h3>My Skills</h3> */}
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default About;
