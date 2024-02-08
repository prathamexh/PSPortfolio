import React from 'react'
import './about.css'
import AboutImg from "../../assets/about.jpg"
import CV from "../../assets/Prathamesh_Shukla_CV.pdf"
import Info from './Info'
const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section__title">
                About Me
        </h2>
            <span className="section__subtitle">
                My Introduction
            </span>

            <div className="about__container container grid">
                <img src={AboutImg} alt="" className="about__img" />
                <div className="about__data">
                    <Info />

                    <p className="about__description">
                    Experienced Full Stack Developer proficient in React, Angular, Spring Boot, and Python API frameworks such as Django and FastAPI. With a passion for creating seamless and efficient web applications, I bring a diverse skill set that spans both front-end and back-end development.
                    </p>
                    <a download="" href={CV} className="button button--flex about__button">Download CV</a>
                </div>
            </div>
    </section>
  )
}

export default About