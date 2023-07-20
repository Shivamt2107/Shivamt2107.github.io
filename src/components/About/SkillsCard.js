import React from "react";
import styles from "./SkillsCard.module.css";

const SkillsCard = (props) => {
  return (
    <li className={styles["skillCard"]}>
      <div className={styles["card"]}>
        <div className={styles["card_image"]} title={props.text}>
          <img src={props.src} />
        </div>
      </div>
    </li>
  );
};

export default SkillsCard;
