import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { BsGithub, BsLink } from "react-icons/bs";
import styles from "./ProjectCard.module.css";
import { HiArrowRight } from "react-icons/hi";





const allProjects = () => {
  return<alert>shivam</alert>    
}


const ProjectCard = () => {
  const [sliderRef, setSliderRef] = useState(null);

  const sliderSettings = {
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const projects = [
    {
      img: "/projects/Himalaya.png",
      name: "Himalaya-Usa Clone.",
      tech: ["HTML", " CSS", "JavaScript", " REST API", "Icon"],
      link: "https://630c7ea5fe01ec7d8a7acb5f--aquamarine-khapse-1fb54c.netlify.app/",
      dec: " Himalaya USA is a website selling wellness products in the United States of America.",
      code: "https://github.com/raj2820/Himalya-USA-Clone",
    },
    {
      img: "/projects/weefit.png",
      name: "WEFIT-Clone",
      tech: [
        "React JS",
        "JavaScript XML",
        "Redux",
        "Axios",
        "Redux-thunk",
        "React-Router",
        "Chakra-UI",
      ],
      link: "https://we-fit.netlify.app/",
      dec: "WEFIT is a body fitness website where users can choose from professionally built workout plans.",
      code: "https://github.com/vaibhav-mougha/WEFIT",
    },
    {
      img: "/projects/weesho.png",
      name: "Meesho-Clone",
      tech: [
        "React",
        "Redux",
        "Axios",
        "JavaScript XML",
        "HTML",
        "CSS",
        "Material-UI",
        "Tailwind",
      ],
      link: "https://fasion-hub-store.vercel.app/",
      dec: "Meesho is a unique platform that allows users to sell products online through social media platforms. ",
      code: "https://github.com/sumitss085/FashionHub_store",
    },
    {
      img: "/projects/LensKart.png",
      name: "LensKart-Clone",
      tech: [
        "React",
        "Redux",
        "Axios",
        "JavaScript XML",
        "Mango",
        "CSS",
        "Material-UI",
        "Tailwind",
      ],
      link: "https://fascinating-cajeta-e3c16d.netlify.app/",
      dec: "LensKart is leading e-commerce company that online optical store packed classic and trendy eyeglasses. ",
      code: "https://github.com/Shivamt2107/LENSKART-CLONE",
    },
    {
      img: "/projects/myfitness.png",
      name: "MyFitnessPal-Clone",
      tech: ["React", "JavaScript XML", "HTML", "CSS", "Chakra-UI"],
      link: "https://reliable-kataifi-f68fe6.netlify.app/",
      dec: "MyFitnessPal allows users to track calories, monitor progress toward weight-management goals.",
      code: "https://github.com/Shivamt2107/expert-hand-9078/tree/main/shivam-gym",
    },
    {
      img: "/projects/revv.png",
      name: "Revv.co.in clone",
      tech: ["React", "JavaScript XML", "HTML", "CSS"],
      link: "https://lustrous-kangaroo-e975a7.netlify.app/",
      dec: "Revv Cars is an Indian self-drive mobility start up funded by Hyundai and others. The company was founded by Anupam Agarwal and Karan Jain in July 2015.",
      code: "https://github.com/Shivamt2107/unique-knowledge-3204",
    },
    {
      img: "/projects/youtube.png",
      name: "YouTube-Clone",
      tech: ["javaScript", "HTML", "CSS", "Api"],
      link: "https://rococo-empanada-4c6ee0.netlify.app/",
      dec: "YouTube is a global online video sharing and social media platform also YouTube is a video sharing service where users can watch, like, share, comment and upload their own videos.",
      code: "https://github.com/masai-course/shivam_Fw19_1173/tree/master/unit-3/sprint-3/day-1/assignments",
    },
    {
      img: "/projects/movie.png",
      name: "Movie Search",
      tech: ["HTML", "Css", "javaScript", "Api"],
      link: "https://meek-praline-19b06a.netlify.app/",
      dec: "It is Simple Movie Search app using a IMDB Api its the world's most popular and search api (imdb) source for movie, TV and celebrity content. Search ratings and reviews for the newest movie and TV shows.",
      code: "https://github.com/shivamt2107",
    },

    // {
    //   img: "/projects/weather.png",
    //   name: "Weather",
    //   tech: ['HTML', 'CSS', 'javaScript', 'Api'],
    //   link: "https://boring-bassi-d831e4.netlify.app/",
    //   dec: "A Simple Weather application where you can search for city to know there weather and On an everyday basis, many people use weather forecasts to determine what to wear on a given day.",
    //   code: "https://github.com/shivamt2107"
    // },
    // {
    //   img: "/projects/hospital.png",
    //   name: "Hospital Employee App",
    //   tech: ["javaScript", "HTML", "CSS"],
    //   link: "https://reliable-profiterole-e60380.netlify.app/",
    //   dec: "It is Simple Hospital Employee Data App",
    //   code: "https://github.com/masai-course/shivam_Fw19_1173/tree/master/unit-2/sprint-3/day-3/assignments/PT-WEB-05%20C2_905871%20(3)"
    // },
    // {
    //   img: "/projects/todo.png",
    //   name: "TODO APP",
    //   tech: ["javaScript", "HTML", "CSS"],
    //   link: "https://vocal-kleicha-b7c1ce.netlify.app/",
    //   dec: "It is Simple-TODO-APP",
    //   code: "https://github.com/shivamt2107"
    // },
  ];

  return (
    <div className={styles.content}>
      <div className={styles.controls}>
        <button onClick={sliderRef?.slickPrev}>
          <FaChevronLeft />
        </button>
        <button onClick={sliderRef?.slickNext}>
          <FaChevronRight />
        </button>
      </div>


      <Slider ref={setSliderRef} {...sliderSettings}>
        {projects.map((card, index) => (
          <div key={index} className={styles.card}>
            <img
              src={card.img}
              alt={card.name}
              className={styles.card_img}
            />
            <div className={styles.text_info}>
              <div className={styles.card_header}>
                <h2>{card.name}</h2>
              </div>
              <div className={styles.techContainer}>
                {card.tech.map((item) => (
                  <div className={styles.tech}>{item}</div>
                ))}
              </div>


              <div className={styles.card_header}>
                <h6>{card.dec}</h6>
              </div>

              <div className={styles.linkdiv}>
                <a className={styles.link} href={card.link} target="_blank">
                  <BsLink />
                </a>

                <a className={styles.link} href={card.code} target="_blank">
                  <BsGithub />
                </a>
              </div>



            </div>
          </div>
        ))}
      </Slider>

      {/* <div className={styles.projects__viewAll}>
        <a>
          <button onClick={allProjects} className={styles.viewAllBtn}>
            View All
            <HiArrowRight className={styles.viewArr} />
          </button>
        </a>
      </div> */}
    </div>
  );
};

export default ProjectCard;
