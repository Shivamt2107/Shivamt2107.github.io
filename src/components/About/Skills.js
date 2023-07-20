import React from "react";
import SkillsCard from "./SkillsCard";
import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <div className={styles["skills"]} id="skills">
      {/* <h1>My current skills</h1> */}
      <div className={styles["skills_container"]}>
        <div className={styles["skills_wrapper"]}>

          {/* <div className={styles.skill}>HTML</div>
          <div className={styles.skill}>CSS</div>
          <div className={styles.skill}>JavaScript</div>
          <div className={styles.skill}>JSON</div>
          <div className={styles.skill}>React.JS</div>
          <div className={styles.skill}>Redux</div>
          <div className={styles.skill}>React-NextJS</div>
          <div className={styles.skill}>TypeScript</div>
          <div className={styles.skill}>Node JS</div>
          <div className={styles.skill}>Express</div>
          <div className={styles.skill}>Mongo-DB</div>
          <div className={styles.skill}>Postman</div>
          <div className={styles.skill}>Storybook</div>
          <div className={styles.skill}>Figma</div>
          <div className={styles.skill}>Material-U</div>
          <div className={styles.skill}>Tailwind</div>
          <div className={styles.skill}>Git</div>
          <div className={styles.skill}>Github</div>
          <div className={styles.skill}>Data Structures and Algorithm</div> */}
            <img src="https://pratikms.com/static/88a0da04c585fe803eb0d30074782fea/5fe40/greeting.webp" alt="about" className={styles.aboutImg}/>
        </div>
      </div>
    </div>
  );
};

export default Skills;
