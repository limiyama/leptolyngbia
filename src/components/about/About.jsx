import React from 'react';
import "./about.css";
import AboutMe from "../../assets/logo.png";
import AboutBox from "./AboutBox";

const About = () => {
    return (
        <section className="about container section" id="about">
            <h2 className="section_title"> About me!!! </h2>

            <div className="about_container grid">
                <img src={AboutMe} alt="" className="about_img" />

                <div className="about_data grid">
                    <div className="about_info">
                        <p className="about_description"> pipipipipopopopo sou a lija</p>
                        <a href="" className="btn">Download CV</a>
                    </div>

                    <div className="about_skills grid">
                        <div className="skills_data">
                            <div className="skills_titles">
                                <h3 className="skills_name">Development </h3>
                                <span className="skills_number development">90%</span>
                            </div>

                            <div className="skills_bar">
                                <span className="skills_percentage"></span>
                            </div>
                        </div>

                        <div className="skills_data">
                            <div className="skills_titles">
                                <h3 className="skills_name">UI/UX design</h3>
                                <span className="skills_number">80%</span>
                            </div>

                            <div className="skills_bar">
                                <span className="skills_percentage"></span>
                            </div>
                        </div>

                        <div className="skills_data">
                            <div className="skills_titles">
                                <h3 className="skills_name">Suicidio</h3>
                                <span className="skills_number">10000%</span>
                            </div>

                            <div className="skills_bar">
                                <span className="skills_percentage"></span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        <AboutBox/>
        </section>
    );
};

export default About;