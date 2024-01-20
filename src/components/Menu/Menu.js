import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./Menu.css";
import { Link } from "react-scroll";
import Logo from "./Assets/favicon.png";

const Menu = ({ setMenuOpen, onCloseClick }) => {
    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <AnimatePresence>
            <motion.section
                className="menu"
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "100%", transition: { duration: 0.3, delay: 0 } }}
                transition={{ duration: 0.3, delay: 0 }}
            >
                <img className="menu_logo" draggable={false} src={Logo} alt="Logo" />
                <span
                    className="material-symbols-outlined-closeMenu"
                    onClick={() => {
                        onCloseClick();
                    }}
                >
                    close
                </span>
                <div className="menu_section">
                    <li className="navBar_section-items">
                        <Link
                            className="navBar_section-items--item"
                            to="sobreMi"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={700}
                            onClick={handleLinkClick}
                        >
                            SOBRE MI
                        </Link>
                    </li>
                    <li className="navBar_section-items">
                        <Link
                            className="navBar_section-items--item"
                            to="proyectos"
                            spy={true}
                            smooth={true}
                            offset={-175}
                            duration={700}
                            onClick={handleLinkClick}
                        >
                            PROYECTOS
                        </Link>
                    </li>
                    <li className="navBar_section-items">
                        <Link
                            className="navBar_section-items--item"
                            to="contacto"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={700}
                            onClick={handleLinkClick}
                        >
                            CONTACTO
                        </Link>
                    </li>
                </div>
                <article className="menu_footer">
                    <p className="menu_footer-copyright">Copyright © - </p>
                    <a
                        draggable={false}
                        href="https://www.linkedin.com/in/eric-dehner/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Eric Dehner
                    </a>
                </article>
            </motion.section>
        </AnimatePresence>
    );
};

export default Menu;
