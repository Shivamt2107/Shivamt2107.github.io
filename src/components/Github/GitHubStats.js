import React, { useEffect } from "react";
import GitHubCalendar from "react-github-calendar";
import { Tooltip as ReactTooltip } from 'react-tooltip'
import Aos from "aos";
import "aos/dist/aos.css";
import styles from "./githubStats.module.css";
import { FaCode, FaGit } from "react-icons/fa";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { BiUserVoice } from "react-icons/bi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { VscGraph } from "react-icons/vsc";

const GitHubStats = () => {
  return (
    <section className={styles.Github_section} id="resume">
      <div className={styles.heading}>
        <h4 className={styles["title"]}>Github Activity </h4>
      </div>

      <div className={styles.stats_container}>

        <img src="https://github-profile-trophy.vercel.app/?username=Shivamt2107&theme=algolia" alt="Shivamt2107" />

      </div>







      <div className={styles.stats_calender} style={{ border: "0px solid black", padding: "30px", marginTop: "30px" }}>
        <GitHubCalendar
          style={{ border: "0px solid black", margin: "auto", color: "var(--cinder)" }}
          blockSize={25}
          fontSize={19}
          blockMargin={5}
          blockRadius={100}
          username="Shivamt2107"
        >
          <ReactTooltip delayShow={15} html />
        </GitHubCalendar>

      </div>



      <div className={styles.githubInfo}>
        <div>
          <div className={styles.texts} ><FaCode size="30px" /> <h1 >1500+ Hours Practical Coding</h1></div>
          <div className={styles.texts} ><RiLightbulbFlashLine size="30px" /> <h1 >500+ Hours Data Structures & Algorithms</h1></div>
          <div className={styles.texts} alignItems="center"><BiUserVoice size="30px" /> <h1 >100+ Hours Soft Skill Development</h1></div>

        </div>


        <div>

          <div className={styles.texts} ><AiOutlineFundProjectionScreen size="30px" /> <h1 >9+ Projects</h1></div>
          <div className={styles.texts}  ><VscGraph size="30px" /> <h1 >60+ Mini Projects</h1></div>
          <div className={styles.texts} ><FaGit size="30px" /> <h1 >400+ Git Commits</h1></div>


        </div>


      </div>

      <div className="GitShivam_Stat" >
        <img
          className="box"
          align="center"
          src="https://github-readme-stats.vercel.app/api?username=Shivamt2107&theme=vision-friendly-dark&show_icons=true&locale=en"
          alt="Shivamt2107"
        />

        <img
          className="box"
          align="center"
          src="https://github-readme-streak-stats.herokuapp.com/?user=Shivamt2107&theme=vision-friendly-dark"
          alt="Shivamt2107"
        />
      </div>



      {/* <div className={styles.githubCalender}>
        <img src="https://github-readme-activity-graph.cyclic.app/graph?username=Shivamt2107&bg_color=000000&color=858585&line=787878&point=545454&area=true&hide_border=true" alt="Shivamt2107" />
      </div> */}


      {/*(https://github-readme-activity-graph.cyclic.app/graph?username=Shivamt2107&bg_color=000000&color=c8b1fb&line=7f2dfb&point=b3b3b3&area=true&hide_border=true)] */}












    </section>
  )
};

export default GitHubStats;
