import "./Footer.css"
import Social from "../Social/Social"

const Footer = ({ isVisible }) => {

    return (
        <section className="footer_container">
            <Social isVisible={isVisible}/>
            <article className="footer">
                <p className="footer_copyright">Copyright © - </p>
                <a draggable={false} href="https://www.linkedin.com/in/eric-dehner/" target="_blank" rel="noreferrer">Eric Dehner</a>
            </article>
        </section>
    )
}
export default Footer