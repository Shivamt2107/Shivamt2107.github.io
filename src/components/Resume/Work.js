import React from "react";
import styles from "./Work.module.css";
import { BsFillBriefcaseFill } from "react-icons/bs";

const Work = () => {
  return (
    <div className={styles.container}>
      <div className={styles.timeline_wrapper}>
        <div>
          <div className={styles.timeline_icon}>
            <BsFillBriefcaseFill />
          </div>
          <div className={styles.timeline_start}></div>
          {/* <h3>Work</h3> */}
        </div>
        <div className={styles.timeline}>

          <div className={styles.timeline_item}>
            <h4 className={styles.timeline_title}>
              Masai School - Full-stack Web Development Program ( Full Time )
            </h4>
            <p className={styles.timeline_date}>March,2022 - present</p>
            <p className={styles.timeline_desc}>
              Spent 1300+ hours mastering algorithms,
              data structures, and full-stack
              development Simultaneously
              developing projects with HTML,
              JavaScript, React, and Redux. Developed
              skills in remote pair-programming using
              GitHub, industry-standard gitflow,
              And daily standups to communicate and
              collaborate with remote developers.
            </p>
          </div>



          <div className={styles.timeline_item}>
            <h4 className={styles.timeline_title}>
              ICICI Bank-(Industrial Credit and Investment Corporation of India)
            </h4>
            <p className={styles.timeline_date}>1 May-2021 -1 Jan-2022</p>
            <p className={styles.timeline_desc}>
              Branch Relationship Officer
            </p>
          </div>




        </div>
      </div>
    </div>
  );
};

export default Work;
