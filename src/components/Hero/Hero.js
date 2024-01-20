import "./Hero.css"
import me from "./Assets/hero.png"
import background from "./Assets/back.png"
import FondoHero from "../FondoHero/FondoHero"
import { Typewriter, Cursor } from "react-simple-typewriter"
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Hero = () => {

    const [typewriterVisible, setTypewriterVisible] = useState(false);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setTypewriterVisible(true);
        }, 2000);
        return () => clearTimeout(timeoutId);
    }, []);

    if (window.innerWidth <= 960) {
        return (
            <section className="hero">
                <FondoHero />
                <div className="hero_content">
                    <h1 className="hero_title">ERIC DEHNER, <br /> <span>DESARROLLADOR <br />{typewriterVisible && (<Typewriter words={["FRONTEND", "BACKEND", "FULLSTACK"]} typeSpeed={120} deleteSpeed={80} delaySpeed={700} />)}{typewriterVisible && <Cursor />}</span></h1>
                    <a target="_blank" rel="noreferrer" href="https://drive.usercontent.google.com/download?id=1sDA9imBTZBsmiqfuKb_PhmZLRGENS-o1&export=download&authuser=1&confirm=t&uuid=2ce84eeb-218c-42f7-aa03-5e0eed3254ee&at=APZUnTVVZLNBmllRvpIUbTouADQX:1705610999671" className="hero_cv">
                        DESCARGAR CV
                    </a>
                </div>
                <motion.div className="hero_img-container" initial={{ x: 10 }} animate={{ x: 0 }} transition={{ duration: 4, delay: 0 }}>
                    <img className="hero_img-back" draggable={false} src={background} alt="Me" />
                    <img className="hero_img" draggable={false} src={me} alt="Me" />
                </motion.div>
            </section>
        )
    }

    return (
        <section className="hero">
            <FondoHero />
            <div className="hero_content">
                <h1 className="hero_title">ERIC DEHNER, <br /> <span>DESARROLLADOR {typewriterVisible && (<Typewriter words={["FRONTEND", "BACKEND", "FULLSTACK"]} typeSpeed={120} deleteSpeed={80} delaySpeed={700} />)}{typewriterVisible && <Cursor />}</span></h1>
                <a target="_blank" rel="noreferrer" href="https://drive.usercontent.google.com/download?id=1sDA9imBTZBsmiqfuKb_PhmZLRGENS-o1&export=download&authuser=1&confirm=t&uuid=2ce84eeb-218c-42f7-aa03-5e0eed3254ee&at=APZUnTVVZLNBmllRvpIUbTouADQX:1705610999671" className="hero_cv">
                    DESCARGAR CV
                </a>
            </div>
            <div className="hero_img-container">
                <img className="hero_img-back" draggable={false} src={background} alt="Me" />
                <img className="hero_img" draggable={false} src={me} alt="Me" />
            </div>
        </section>
    )
}

export default Hero