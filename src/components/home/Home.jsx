import React from 'react';
import "./home.css";
import Me from "../../assets/eu.png";
import HeaderSocials from './HeaderSocials';

const Home = () => {
    return (
        <section className="home container" id="home">
            <div className="intro">
                <img src={Me} alt="" className="home_img" />
                <h1 className="home_name">Lígia</h1>
                <span className="home_education">I'm a undergraduate researcher!</span>

                <HeaderSocials />

                <a href="#contact" className="btn">Contact me!</a>
            </div>
        </section>
    )
}

export default Home