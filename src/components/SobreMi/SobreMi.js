import "./SobreMi.css"
import html from "./Assets/html.svg"
import css from "./Assets/css.svg"
import js from "./Assets/js.svg"
import react from "./Assets/react.svg"
import node from "./Assets/nodejs.svg"
import mongo from "./Assets/mongodb.svg"
import firebase from "./Assets/firebase.svg"
import python from "./Assets/python.svg"
import sass from "./Assets/sass.svg"
import git from "./Assets/git.svg"
import me from "./Assets/me.jpeg"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const SobreMi = () => {
    if (window.innerWidth <= 328) {
        return (
            <div className="sobreMi_container" id="sobreMi">
                <h2 className="sobreMi_title">SOBRE MI</h2>
                <div className="sobreMi">
                    <div className="sobreMi_img">
                        <img className="sobreMi_img-img" draggable={false} src={me} alt="Foto personal" />
                    </div>
                    <div className="sobreMi_content">
                        <p className="sobreMi_content-description">¡Hola, soy Eric Dehner, un apasionado desarrollador Full Stack de 26 años. Vivo en Buenos Aires, Argentina. Mi fascinación por la creación de experiencias web excepcionales me ha llevado a especializarme en el desarrollo FrontEnd, aunque mi curiosidad y deseo constante de aprendizaje me impulsan a explorar nuevos horizontes en el mundo de la programación.
                            <br />
                            <br />
                            Aunque mi especialidad es el FrontEnd, mi apetito por el conocimiento no tiene límites. Estoy constantemente buscando oportunidades para ampliar mis habilidades y explorar nuevos lenguajes de programación. Creo firmemente en la importancia de la formación continua para mantenerme al día con las últimas tendencias y tecnologías en el mundo del desarrollo.
                            <br />
                            <br />
                            Mi enfoque va más allá de simplemente escribir código. Soy un entusiasta del diseño y me esfuerzo por encontrar el equilibrio perfecto entre la estética visual y la funcionalidad intuitiva en cada proyecto en el que me embarco.
                            <br />
                            <br />
                            Siempre estoy abierto a desafíos emocionantes y colaboraciones creativas. ¡Estoy ansioso por seguir creciendo y contribuyendo al fascinante mundo del desarrollo web!
                        </p>
                    </div>

                </div>
                <div className="sobreMi_icons">
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={50}
                        centeredSlides={true}
                        loop={true}
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: false,
                        }}
                        navigation={false}
                        allowTouchMove={false}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide><img className="sobreMi_icons-icon" draggable={false} src={css} alt="CSS" /></SwiperSlide>
                        <SwiperSlide><img className="sobreMi_icons-icon" draggable={false} src={js} alt="JavaScript" /></SwiperSlide>
                        <SwiperSlide><img className="sobreMi_icons-icon" draggable={false} src={git} alt="Git" /></SwiperSlide>
                        <SwiperSlide><img className="sobreMi_icons-icon" draggable={false} src={sass} alt="Sass" /></SwiperSlide>
                        <SwiperSlide><img className="sobreMi_icons-icon" draggable={false} src={react} alt="React.Js" /></SwiperSlide>
                        <SwiperSlide><img className="sobreMi_icons-icon" draggable={false} src={node} alt="NODE.JS" /></SwiperSlide>
                        <SwiperSlide><img className="sobreMi_icons-icon" draggable={false} src={python} alt="Python" /></SwiperSlide>
                        <SwiperSlide><img className="sobreMi_icons-icon" draggable={false} src={mongo} alt="MongoDB" /></SwiperSlide>
                        <SwiperSlide><img className="sobreMi_icons-icon" draggable={false} src={firebase} alt="FireBase" /></SwiperSlide>
                        <SwiperSlide><img className="sobreMi_icons-icon" draggable={false} src={html} alt="HTML" /></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        )
    }
    if (window.innerWidth <= 425) {
        return (
            <div className="sobreMi_container" id="sobreMi">
                <h2 className="sobreMi_title">SOBRE MI</h2>
                <div className="sobreMi">
                    <div className="sobreMi_img">
                        <img className="sobreMi_img-img" draggable={false} src={me} alt="Foto personal" />
                    </div>
                    <div className="sobreMi_content">
                        <p className="sobreMi_content-description">¡Hola, soy Eric Dehner, un apasionado desarrollador Full Stack de 26 años. Vivo en Buenos Aires, Argentina. Mi fascinación por la creación de experiencias web excepcionales me ha llevado a especializarme en el desarrollo FrontEnd, aunque mi curiosidad y deseo constante de aprendizaje me impulsan a explorar nuevos horizontes en el mundo de la programación.
                            <br />
                            <br />
                            Aunque mi especialidad es el FrontEnd, mi apetito por el conocimiento no tiene límites. Estoy constantemente buscando oportunidades para ampliar mis habilidades y explorar nuevos lenguajes de programación. Creo firmemente en la importancia de la formación continua para mantenerme al día con las últimas tendencias y tecnologías en el mundo del desarrollo.
                            <br />
                            <br />
                            Mi enfoque va más allá de simplemente escribir código. Soy un entusiasta del diseño y me esfuerzo por encontrar el equilibrio perfecto entre la estética visual y la funcionalidad intuitiva en cada proyecto en el que me embarco.
                            <br />
                            <br />
                            Siempre estoy abierto a desafíos emocionantes y colaboraciones creativas. ¡Estoy ansioso por seguir creciendo y contribuyendo al fascinante mundo del desarrollo web!
                        </p>
                    </div>

                </div>
                <div className="sobreMi_icons">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={100}
                        centeredSlides={true}
                        loop={true}
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: false,
                        }}
                        navigation={false}
                        allowTouchMove={false}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide><img className="sobreMi_icons-icon" draggable={false} src={css} alt="CSS" /></SwiperSlide>
                        <SwiperSlide><img className="sobreMi_icons-icon" draggable={false} src={js} alt="JavaScript" /></SwiperSlide>
                        <SwiperSlide><img className="sobreMi_icons-icon" draggable={false} src={git} alt="Git" /></SwiperSlide>
                        <SwiperSlide><img className="sobreMi_icons-icon" draggable={false} src={sass} alt="Sass" /></SwiperSlide>
                        <SwiperSlide><img className="sobreMi_icons-icon" draggable={false} src={react} alt="React.Js" /></SwiperSlide>
                        <SwiperSlide><img className="sobreMi_icons-icon" draggable={false} src={node} alt="NODE.JS" /></SwiperSlide>
                        <SwiperSlide><img className="sobreMi_icons-icon" draggable={false} src={python} alt="Python" /></SwiperSlide>
                        <SwiperSlide><img className="sobreMi_icons-icon" draggable={false} src={mongo} alt="MongoDB" /></SwiperSlide>
                        <SwiperSlide><img className="sobreMi_icons-icon" draggable={false} src={firebase} alt="FireBase" /></SwiperSlide>
                        <SwiperSlide><img className="sobreMi_icons-icon" draggable={false} src={html} alt="HTML" /></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        )
    }
    if (window.innerWidth <= 500) {
        return (
            <div className="sobreMi_container" id="sobreMi">
                <h2 className="sobreMi_title">SOBRE MI</h2>
                <div className="sobreMi">
                    <div className="sobreMi_img">
                        <img className="sobreMi_img-img" draggable={false} src={me} alt="Foto personal" />
                    </div>
                    <div className="sobreMi_content">
                        <p className="sobreMi_content-description">¡Hola, soy Eric Dehner, un apasionado desarrollador Full Stack de 26 años. Vivo en Buenos Aires, Argentina. Mi fascinación por la creación de experiencias web excepcionales me ha llevado a especializarme en el desarrollo FrontEnd, aunque mi curiosidad y deseo constante de aprendizaje me impulsan a explorar nuevos horizontes en el mundo de la programación.
                            <br />
                            <br />
                            Aunque mi especialidad es el FrontEnd, mi apetito por el conocimiento no tiene límites. Estoy constantemente buscando oportunidades para ampliar mis habilidades y explorar nuevos lenguajes de programación. Creo firmemente en la importancia de la formación continua para mantenerme al día con las últimas tendencias y tecnologías en el mundo del desarrollo.
                            <br />
                            <br />
                            Mi enfoque va más allá de simplemente escribir código. Soy un entusiasta del diseño y me esfuerzo por encontrar el equilibrio perfecto entre la estética visual y la funcionalidad intuitiva en cada proyecto en el que me embarco.
                            <br />
                            <br />
                            Siempre estoy abierto a desafíos emocionantes y colaboraciones creativas. ¡Estoy ansioso por seguir creciendo y contribuyendo al fascinante mundo del desarrollo web!
                        </p>
                    </div>

                </div>
                <div className="sobreMi_icons">
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={0}
                        centeredSlides={true}
                        loop={true}
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: false,
                        }}
                        navigation={false}
                        allowTouchMove={false}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide><img className="sobreMi_icons-icon" draggable={false} src={js} alt="JavaScript" /></SwiperSlide>
                        <SwiperSlide><img className="sobreMi_icons-icon" draggable={false} src={git} alt="Git" /></SwiperSlide>
                        <SwiperSlide><img className="sobreMi_icons-icon" draggable={false} src={sass} alt="Sass" /></SwiperSlide>
                        <SwiperSlide><img className="sobreMi_icons-icon" draggable={false} src={react} alt="React.Js" /></SwiperSlide>
                        <SwiperSlide><img className="sobreMi_icons-icon" draggable={false} src={node} alt="NODE.JS" /></SwiperSlide>
                        <SwiperSlide><img className="sobreMi_icons-icon" draggable={false} src={python} alt="Python" /></SwiperSlide>
                        <SwiperSlide><img className="sobreMi_icons-icon" draggable={false} src={mongo} alt="MongoDB" /></SwiperSlide>
                        <SwiperSlide><img className="sobreMi_icons-icon" draggable={false} src={firebase} alt="FireBase" /></SwiperSlide>
                        <SwiperSlide><img className="sobreMi_icons-icon" draggable={false} src={html} alt="HTML" /></SwiperSlide>
                        <SwiperSlide><img className="sobreMi_icons-icon" draggable={false} src={css} alt="CSS" /></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        )
    }

    if (window.innerWidth <= 580) {
        return (
            <div className="sobreMi_container" id="sobreMi">
                <h2 className="sobreMi_title">SOBRE MI</h2>
                <div className="sobreMi">
                    <div className="sobreMi_img">
                        <img className="sobreMi_img-img" draggable={false} src={me} alt="Foto personal" />
                    </div>
                    <div className="sobreMi_content">
                        <p className="sobreMi_content-description">¡Hola, soy Eric Dehner, un apasionado desarrollador Full Stack de 26 años. Vivo en Buenos Aires, Argentina. Mi fascinación por la creación de experiencias web excepcionales me ha llevado a especializarme en el desarrollo FrontEnd, aunque mi curiosidad y deseo constante de aprendizaje me impulsan a explorar nuevos horizontes en el mundo de la programación.
                            <br />
                            <br />
                            Aunque mi especialidad es el FrontEnd, mi apetito por el conocimiento no tiene límites. Estoy constantemente buscando oportunidades para ampliar mis habilidades y explorar nuevos lenguajes de programación. Creo firmemente en la importancia de la formación continua para mantenerme al día con las últimas tendencias y tecnologías en el mundo del desarrollo.
                            <br />
                            <br />
                            Mi enfoque va más allá de simplemente escribir código. Soy un entusiasta del diseño y me esfuerzo por encontrar el equilibrio perfecto entre la estética visual y la funcionalidad intuitiva en cada proyecto en el que me embarco.
                            <br />
                            <br />
                            Siempre estoy abierto a desafíos emocionantes y colaboraciones creativas. ¡Estoy ansioso por seguir creciendo y contribuyendo al fascinante mundo del desarrollo web!
                        </p>
                    </div>

                </div>
                <div className="sobreMi_icons">
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={0}
                        centeredSlides={true}
                        loop={true}
                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: false,
                        }}
                        navigation={false}
                        allowTouchMove={false}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide><img className="sobreMi_icons-icon" draggable={false} src={js} alt="JavaScript" /></SwiperSlide>
                        <SwiperSlide><img className="sobreMi_icons-icon" draggable={false} src={git} alt="Git" /></SwiperSlide>
                        <SwiperSlide><img className="sobreMi_icons-icon" draggable={false} src={sass} alt="Sass" /></SwiperSlide>
                        <SwiperSlide><img className="sobreMi_icons-icon" draggable={false} src={react} alt="React.Js" /></SwiperSlide>
                        <SwiperSlide><img className="sobreMi_icons-icon" draggable={false} src={node} alt="NODE.JS" /></SwiperSlide>
                        <SwiperSlide><img className="sobreMi_icons-icon" draggable={false} src={python} alt="Python" /></SwiperSlide>
                        <SwiperSlide><img className="sobreMi_icons-icon" draggable={false} src={mongo} alt="MongoDB" /></SwiperSlide>
                        <SwiperSlide><img className="sobreMi_icons-icon" draggable={false} src={firebase} alt="FireBase" /></SwiperSlide>
                        <SwiperSlide><img className="sobreMi_icons-icon" draggable={false} src={html} alt="HTML" /></SwiperSlide>
                        <SwiperSlide><img className="sobreMi_icons-icon" draggable={false} src={css} alt="CSS" /></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        )
    }


    if (window.innerWidth <= 900) {
        return (
            <div className="sobreMi_container" id="sobreMi">
                <h2 className="sobreMi_title">SOBRE MI</h2>
                <div className="sobreMi">
                    <div className="sobreMi_img">
                        <img className="sobreMi_img-img" draggable={false} src={me} alt="Foto personal" />
                    </div>
                    <div className="sobreMi_content">
                        <p className="sobreMi_content-description">¡Hola, soy Eric Dehner, un apasionado desarrollador Full Stack de 26 años. Vivo en Buenos Aires, Argentina. Mi fascinación por la creación de experiencias web excepcionales me ha llevado a especializarme en el desarrollo FrontEnd, aunque mi curiosidad y deseo constante de aprendizaje me impulsan a explorar nuevos horizontes en el mundo de la programación.
                            <br />
                            <br />
                            Aunque mi especialidad es el FrontEnd, mi apetito por el conocimiento no tiene límites. Estoy constantemente buscando oportunidades para ampliar mis habilidades y explorar nuevos lenguajes de programación. Creo firmemente en la importancia de la formación continua para mantenerme al día con las últimas tendencias y tecnologías en el mundo del desarrollo.
                            <br />
                            <br />
                            Mi enfoque va más allá de simplemente escribir código. Soy un entusiasta del diseño y me esfuerzo por encontrar el equilibrio perfecto entre la estética visual y la funcionalidad intuitiva en cada proyecto en el que me embarco.
                            <br />
                            <br />
                            Siempre estoy abierto a desafíos emocionantes y colaboraciones creativas. ¡Estoy ansioso por seguir creciendo y contribuyendo al fascinante mundo del desarrollo web!
                        </p>
                    </div>

                </div>
                <div className="sobreMi_icons">
                    <Swiper
                        slidesPerView={5}
                        spaceBetween={80}
                        centeredSlides={true}
                        loop={true}
                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: false,
                        }}
                        navigation={false}
                        allowTouchMove={false}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide><img className="sobreMi_icons-icon" draggable={false} src={js} alt="JavaScript" /></SwiperSlide>
                        <SwiperSlide><img className="sobreMi_icons-icon" draggable={false} src={git} alt="Git" /></SwiperSlide>
                        <SwiperSlide><img className="sobreMi_icons-icon" draggable={false} src={sass} alt="Sass" /></SwiperSlide>
                        <SwiperSlide><img className="sobreMi_icons-icon" draggable={false} src={react} alt="React.Js" /></SwiperSlide>
                        <SwiperSlide><img className="sobreMi_icons-icon" draggable={false} src={node} alt="NODE.JS" /></SwiperSlide>
                        <SwiperSlide><img className="sobreMi_icons-icon" draggable={false} src={python} alt="Python" /></SwiperSlide>
                        <SwiperSlide><img className="sobreMi_icons-icon" draggable={false} src={mongo} alt="MongoDB" /></SwiperSlide>
                        <SwiperSlide><img className="sobreMi_icons-icon" draggable={false} src={firebase} alt="FireBase" /></SwiperSlide>
                        <SwiperSlide><img className="sobreMi_icons-icon" draggable={false} src={html} alt="HTML" /></SwiperSlide>
                        <SwiperSlide><img className="sobreMi_icons-icon" draggable={false} src={css} alt="CSS" /></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        )
    }

    if (window.innerWidth <= 1312) {
        return (
            <div className="sobreMi_container" id="sobreMi">
                <h2 className="sobreMi_title">SOBRE MI</h2>
                <div className="sobreMi">
                    <div className="sobreMi_img">
                        <img className="sobreMi_img-img" draggable={false} src={me} alt="Foto personal" />
                    </div>
                    <div className="sobreMi_content">
                        <p className="sobreMi_content-description">¡Hola, soy Eric Dehner, un apasionado desarrollador Full Stack de 26 años. Vivo en Buenos Aires, Argentina. Mi fascinación por la creación de experiencias web excepcionales me ha llevado a especializarme en el desarrollo FrontEnd, aunque mi curiosidad y deseo constante de aprendizaje me impulsan a explorar nuevos horizontes en el mundo de la programación.
                            <br />
                            <br />
                            Aunque mi especialidad es el FrontEnd, mi apetito por el conocimiento no tiene límites. Estoy constantemente buscando oportunidades para ampliar mis habilidades y explorar nuevos lenguajes de programación. Creo firmemente en la importancia de la formación continua para mantenerme al día con las últimas tendencias y tecnologías en el mundo del desarrollo.
                            <br />
                            <br />
                            Mi enfoque va más allá de simplemente escribir código. Soy un entusiasta del diseño y me esfuerzo por encontrar el equilibrio perfecto entre la estética visual y la funcionalidad intuitiva en cada proyecto en el que me embarco.
                            <br />
                            <br />
                            Siempre estoy abierto a desafíos emocionantes y colaboraciones creativas. ¡Estoy ansioso por seguir creciendo y contribuyendo al fascinante mundo del desarrollo web!
                        </p>
                    </div>

                </div>
                <div className="sobreMi_icons">
                    <Swiper
                        slidesPerView={6}
                        spaceBetween={0}
                        centeredSlides={true}
                        loop={true}
                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: false,
                        }}
                        navigation={false}
                        allowTouchMove={false}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide><img className="sobreMi_icons-icon" draggable={false} src={git} alt="Git" /></SwiperSlide>
                        <SwiperSlide><img className="sobreMi_icons-icon" draggable={false} src={sass} alt="Sass" /></SwiperSlide>
                        <SwiperSlide><img className="sobreMi_icons-icon" draggable={false} src={react} alt="React.Js" /></SwiperSlide>
                        <SwiperSlide><img className="sobreMi_icons-icon" draggable={false} src={node} alt="NODE.JS" /></SwiperSlide>
                        <SwiperSlide><img className="sobreMi_icons-icon" draggable={false} src={python} alt="Python" /></SwiperSlide>
                        <SwiperSlide><img className="sobreMi_icons-icon" draggable={false} src={mongo} alt="MongoDB" /></SwiperSlide>
                        <SwiperSlide><img className="sobreMi_icons-icon" draggable={false} src={firebase} alt="FireBase" /></SwiperSlide>
                        <SwiperSlide><img className="sobreMi_icons-icon" draggable={false} src={html} alt="HTML" /></SwiperSlide>
                        <SwiperSlide><img className="sobreMi_icons-icon" draggable={false} src={css} alt="CSS" /></SwiperSlide>
                        <SwiperSlide><img className="sobreMi_icons-icon" draggable={false} src={js} alt="JavaScript" /></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        )
    }
    return (
        <div className="sobreMi_container" id="sobreMi">
            <h2 className="sobreMi_title">SOBRE MI</h2>
            <div className="sobreMi">
                <div className="sobreMi_content">
                    <p className="sobreMi_content-description">¡Hola, soy Eric Dehner, un apasionado desarrollador Full Stack de 26 años. Vivo en Buenos Aires, Argentina. Mi fascinación por la creación de experiencias web excepcionales me ha llevado a especializarme en el desarrollo FrontEnd, aunque mi curiosidad y deseo constante de aprendizaje me impulsan a explorar nuevos horizontes en el mundo de la programación.
                        <br />
                        <br />
                        Aunque mi especialidad es el FrontEnd, mi apetito por el conocimiento no tiene límites. Estoy constantemente buscando oportunidades para ampliar mis habilidades y explorar nuevos lenguajes de programación. Creo firmemente en la importancia de la formación continua para mantenerme al día con las últimas tendencias y tecnologías en el mundo del desarrollo.
                        <br />
                        <br />
                        Mi enfoque va más allá de simplemente escribir código. Soy un entusiasta del diseño y me esfuerzo por encontrar el equilibrio perfecto entre la estética visual y la funcionalidad intuitiva en cada proyecto en el que me embarco.
                        <br />
                        <br />
                        Siempre estoy abierto a desafíos emocionantes y colaboraciones creativas. ¡Estoy ansioso por seguir creciendo y contribuyendo al fascinante mundo del desarrollo web!
                    </p>
                </div>
                <div className="sobreMi_img">
                    <img className="sobreMi_img-img" draggable={false} src={me} alt="Foto personal" />
                </div>
            </div>
            <div className="sobreMi_icons">
                <img className="sobreMi_icons-icon" draggable={false} src={html} alt="HTML" />
                <img className="sobreMi_icons-icon" draggable={false} src={css} alt="CSS" />
                <img className="sobreMi_icons-icon" draggable={false} src={js} alt="JavaScript" />
                <img className="sobreMi_icons-icon" draggable={false} src={git} alt="Git" />
                <img className="sobreMi_icons-icon" draggable={false} src={sass} alt="Sass" />
                <img className="sobreMi_icons-icon" draggable={false} src={react} alt="React.Js" />
                <img className="sobreMi_icons-icon" draggable={false} src={node} alt="NODE.JS" />
                <img className="sobreMi_icons-icon" draggable={false} src={python} alt="Python" />
                <img className="sobreMi_icons-icon" draggable={false} src={mongo} alt="MongoDB" />
                <img className="sobreMi_icons-icon" draggable={false} src={firebase} alt="FireBase" />
            </div>
        </div>
    )
}
export default SobreMi