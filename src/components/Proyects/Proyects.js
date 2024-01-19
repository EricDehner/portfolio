import "./Proyects.css"
import Proyect from "../Proyect/Proyect"
import data from "./data.json";

const Proyects = () => {

    return (
        <section>
            <h2 className="proyects_title">PROYECTOS</h2>
            <article className="proyects">
                <Proyect {...data.Proyecto5} />
                <Proyect {...data.Proyecto4} />
                <Proyect {...data.Proyecto3} />
                <Proyect {...data.Proyecto2} />
                <Proyect {...data.Proyecto1} />
            </article>
        </section>
    )
}
export default Proyects