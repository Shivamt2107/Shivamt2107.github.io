import React, { useContext } from 'react';
import Marquee from "react-fast-marquee";
import skillsImage from '../../utils/SkillsImage';
import style from "./Skills.module.css"



const skillsData = [
    'HTML',
    'Javascript',
    'CSS',
    'React',
    'Express',
    'Node JS',
    'Bootstrap',
    'MongoDB',
    'Microsoft Office',
    'HTML',
    'CSS',
    'Javascript',
    'TypeScript',
    'React',
    'Redux',
    'NodeJS',
    'MongoDB',
    "Express",
    'TailWind',
    'Bootstrap',
    "Git",
    "Cypress",
    "npm",
    "PostMan",
    "MaterialUI",
    'Canva',
    "Microsoft Office",
    "HTML",
    "CSS",
    "JS",
    "React",
    "Next JS",
    // "Nuxt JS",
    "Node JS",
    "Vue",
    // "Angular",
    // "Docker",
    "Photoshop",
    // "Illustrator",
    // "Svelte",
    // "GCP",
    // "Azure",
    // "Fastify",
    // "Haxe",
    // "Ionic",
    // "Markdown",
    "Microsoft Office",
    // "Picsart",
    // "Sketch",
    // "Unity",
    // "WolframAlpha",
    // "Adobe XD",
    // "After Effects",
    "Bootstrap",
    // "Bulma",
    // "CapacitorJs",
    // "Coffeescript",
    // "MemSQL",
    // "C",
    // "C++",
    // "C#",
    // "Python",
    // "Java",
    // "Julia",
    // "Matlab",
    // "Swift",
    // "Ruby",
    // "Kotlin",
    // "Go",
    // "PHP",
    // "Flutter",
    // "Dart",
    "Typescript",
    // "Swift",
    "Git",
    "Figma",
    "Canva",
    // "Ubuntu",
    'Bootstrap',
    "MongoDB",
    "Tailwind",
    "ViteJS",
    // "VuetifyJS",
    // "MySQL",
    // "PostgreSQL",
    // "AWS",
    "Firebase",
    // "Blender",
    // "Premiere Pro",
    // "Adobe Audition",
    // "Deno",
    // "Django",
    // "Gimp",
    // "Graphql",
    // "Lightroom",
    "MaterialUI",
    // "Nginx",
    // "Numpy",
    // "OpenCV",
    // "Pytorch",
    // "Selenium",
    // 'Strapi',
    // "Tensorflow",
    // "Webex",
    // "Wordpress",

]



function SkillsShivam() {



    const skillBoxStyle = {
        backgroundColor: `var(--white)`,
        backgroundColor: `var(--midnight-express)`,
        boxShadow: `rgba(0, 0, 0, 0.24) 0px 3px 8px`
    }

    return (
        <div className={style.skills} >
            <div className={style.skillsHeader}>
                <h2>MY SKILLS</h2>
            </div>
            <div className={style.skillsContainer}>
                <div className={style.skill__scroll}>
                    <Marquee
                        gradient={false}
                        speed={100}
                        pauseOnHover={true}
                        pauseOnClick={true}
                        delay={0}
                        play={true}
                        direction="right"
                    >
                        {skillsData.map((skill, id) => (
                            <div className={style.skill__box} key={id} style={skillBoxStyle}>
                                <img src={skillsImage(skill)} alt={skill} />
                                <h3>
                                    {skill}
                                </h3>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    )
}

export default SkillsShivam