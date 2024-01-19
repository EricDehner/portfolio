import "./Hero.css"
import me from "./Assets/hero.png"
import background from "./Assets/back.png"
import FondoHero from "../FondoHero/FondoHero"
import { Typewriter, Cursor } from "react-simple-typewriter"

const Hero = () => {
    if (window.innerWidth <= 960) {
        return(
            <section className="hero">
            <FondoHero />
            <div className="hero_content">
                <h1 className="hero_title">ERIC DEHNER, <br /> <span>DESARROLLADOR <br/><Typewriter words={["FRONTEND", "BACKEND", "FULLSTACK"]} typeSpeed={120} deleteSpeed={80} delaySpeed={700} /></span><Cursor /></h1>
                <a href="https://drive.usercontent.google.com/download?id=1sDA9imBTZBsmiqfuKb_PhmZLRGENS-o1&export=download&authuser=1&confirm=t&uuid=2ce84eeb-218c-42f7-aa03-5e0eed3254ee&at=APZUnTVVZLNBmllRvpIUbTouADQX:1705610999671" className="hero_cv">
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


    return (
        <section className="hero">
            <FondoHero />
            <div className="hero_content">
                <h1 className="hero_title">ERIC DEHNER, <br /> <span>DESARROLLADOR <Typewriter words={["FRONTEND", "BACKEND", "FULLSTACK"]} typeSpeed={120} deleteSpeed={80} delaySpeed={700} /></span><Cursor /></h1>
                <a href="https://drive.usercontent.google.com/download?id=1sDA9imBTZBsmiqfuKb_PhmZLRGENS-o1&export=download&authuser=1&confirm=t&uuid=2ce84eeb-218c-42f7-aa03-5e0eed3254ee&at=APZUnTVVZLNBmllRvpIUbTouADQX:1705610999671" className="hero_cv">
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