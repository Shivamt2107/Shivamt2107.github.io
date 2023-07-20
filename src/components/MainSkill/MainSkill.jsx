import React from 'react'
import SkillsShivam from '../skills/Skills'
import styles from "./MainSkill.module.css"

const MainSkill = () => {
  return (
    <section className={styles.about_section} id="about">
      <div className={styles.heading}>
        {/* <h2 className={styles["title"]}>About Me</h2> */}
      </div>
      <div className={styles.container}>
      <SkillsShivam/>
      </div>
    </section>
  )
}

export default MainSkill