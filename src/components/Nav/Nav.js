import Scroll from "../Scroll/Scroll";
import "./Nav.css";
import { Link } from "react-scroll";

const Nav = ({ setIsMenuOpen }) => {
    const handleMenuClick = () => {
        setIsMenuOpen(true);
    };

    if (window.innerWidth <= 768) {
        return (
            <section className="navBar">
                <div className="navBar_brand">
                    <Link className="navBar_brand-brand" to="top" spy={true} smooth={true} offset={0} duration={700}>
                        ERIC DEHNER
                    </Link>
                </div>
                <button className="menu_btn" onClick={handleMenuClick}>
                    <span className="material-symbols-outlined-menu">menu</span>
                </button>
            </section>
        );
    }

    return (
        <section className="navBar">
            <div className="navBar_brand">
                <Link className="navBar_brand-brand" to="top" spy={true} smooth={true} offset={0} duration={700}>
                    ERIC DEHNER
                </Link>
            </div>
            <div className="navBar_section">
                <li className="navBar_section-items">
                    <Link className="navBar_section-items--item" to="sobreMi" spy={true} smooth={true} offset={-100} duration={700}>
                        SOBRE MI
                    </Link>
                </li>
                <li className="navBar_section-items">
                    <Link className="navBar_section-items--item" to="proyectos" spy={true} smooth={true} offset={-175} duration={700}>
                        PROYECTOS
                    </Link>
                </li>
                <li className="navBar_section-items">
                    <Link className="navBar_section-items--item" to="contacto" spy={true} smooth={true} offset={0} duration={700}>
                        CONTACTO
                    </Link>
                </li>
            </div>
            <Scroll className="navBar_scroll" />
        </section>
    );
};

export default Nav;