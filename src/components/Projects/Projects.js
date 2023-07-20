import React from "react";
import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <section className={styles.work_section} id="work">
      <div className={styles.heading}>
        <h2 className={styles["title"]}>My Projects</h2>
      </div>
      <div className={styles.container}>
        <ProjectCard />
      </div>
    </section>
  );
};

export default Projects;
