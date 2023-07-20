import React from "react";
import "./skills.css";
import { AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { RiCss3Fill, RiTeamFill } from "react-icons/ri";
import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io";
import { FaReact, FaPeopleArrows } from "react-icons/fa";
import { SiRedux, SiTypescript, SiExpress, SiMongodb } from "react-icons/si";
import { SiCypress } from "react-icons/si";
import { TbBrandNextjs, TbBulb } from "react-icons/tb";
import { DiGit, DiVisualstudio } from "react-icons/di";


const TechSkill = () => {
  return (
    <section className="experience" id="skill">
      <h2 className="title">My Skills</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="skills_cards">
            <div className="skills_card">
              <AiFillHtml5 className="interest_icons" />
              <small>HTML</small>
            </div>
            <div className="skills_card">
              <RiCss3Fill className="interest_icons" />
              <small>CSS</small>
            </div>
            <div className="skills_card">
              <IoLogoJavascript className="interest_icons" />
              <small>JavaScript</small>
            </div>
            <div className="skills_card">
              <FaReact className="interest_icons" />
              <small>React</small>
            </div>
            <div className="skills_card">
              <SiRedux className="interest_icons" />
              <small>Redux</small>
            </div>
            <div className="skills_card">
              <SiTypescript className="interest_icons" />
              <small>TypeScript</small>
            </div>
            <div className="skills_card">
              <TbBrandNextjs className="interest_icons" />
              <small>NextJS</small>
            </div>
            <div className="skills_card">
              <SiCypress className="interest_icons" />
              <small>Cypress</small>
            </div>
          </div>
        </div>

        {/* FRONTEND PART ENDED  */}
        <div className="experience__backend">
          <div>
            <h3>Backend Development</h3>
            <div className="skills_cards">
              <div className="skills_card">
                <IoLogoNodejs className="interest_icons" />
                <small>NodeJS</small>
              </div>
              <div className="skills_card">
                <SiExpress className="interest_icons" />
                <small>ExpressJS</small>
              </div>
              <div className="skills_card">
                <SiMongodb className="interest_icons" />
                <small>MongoDB</small>
              </div>
            </div>
          </div>
          <div>
            <h3>Development Tools</h3>
            <div className="skills_cards">
              <div className="skills_card">
                <DiGit className="interest_icons" />
                <small>Git</small>
              </div>
              <div className="skills_card">
                <AiFillGithub className="interest_icons" />
                <small>GitHub</small>
              </div>
              <div className="skills_card">
                <DiVisualstudio className="interest_icons" />
                <small>VS Code</small>
              </div>
            </div>
          </div>
        </div>
        <div className="professional_skills">
          <h3>Professional Skills</h3>
          <div className="professional_cards">
            <div className="skills_card">
              <FaPeopleArrows className="interest_icons" />
              <small>Comm.</small>
            </div>
            <div className="skills_card">
              <RiTeamFill className="interest_icons" />
              <small>Teamwork</small>
            </div>
            <div className="skills_card">
              <TbBulb className="interest_icons" />
              <small>Creativity</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSkill;