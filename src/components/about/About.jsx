import React from 'react';
import "./about.css";
import AboutMe from "../../assets/image.png";

const About = () => {
    return (
        <section className="about container section" id="about">
            <h2 className="section_title"> About me <i>!!!</i></h2>

            <div className="about_container grid">
                <img src={AboutMe} alt="" className="about_img" />

                <div className="about_data grid">
                    <div className="about_info">
                        <p className="about_description"> Hi! I am an Undergraduate researcher at LabAzul, currently studying Brazilian cyanobacteria and their potential to produce novel natural products with pharmaceutical and biotechnological applications.</p>
                        <a href="http://lattes.cnpq.br/8085124701759641" className="btn">Check my CV!</a>
                    </div>

                    <div className="about_skills grid">
                        <div className="skills_data">
                            <div className="skills_titles">
                                <h3 className="skills_name">Genome mining</h3>
                                <span className="skills_number">90%</span>
                            </div>

                            <div className="skills_bar">
                                <span className="skills_percentage genome"></span>
                            </div>
                        </div>

                        <div className="skills_data">
                            <div className="skills_titles">
                                <h3 className="skills_name">Full-stack development</h3>
                                <span className="skills_number">75%</span>
                            </div>

                            <div className="skills_bar">
                                <span className="skills_percentage development"></span>
                            </div>
                        </div>

                        <div className="skills_data">
                            <div className="skills_titles">
                                <h3 className="skills_name">Coffee</h3>
                                <span className="skills_number">10000%</span>
                            </div>

                            <div className="skills_bar">
                                <span className="skills_percentage coffee"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;