import React from 'react';
import "./home.css";
import Me from "../../assets/home_lija.png";
import HeaderSocials from './HeaderSocials';

const Home = () => {
    return (
        <section className="home container" id="home">
            <div className="intro">
                <img src={Me} alt="" className="home_img" />
                <h1 className="home_name">Hi, this is Lígia <i>!!!</i></h1>
                <span className="home_education">I'm a Biotechnology student at EACH-USP and an IT professional! </span>

                <HeaderSocials />

                <a href="mailto:ligia.mizuyama@usp.br" className="btn btn-email">Contact me!</a>
            </div>
        </section>
    )
}

export default Home