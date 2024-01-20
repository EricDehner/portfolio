import "./Proyect.css"

const Proyect = ({ id, imagen, title, date, link, aptitudes }) => {

    if (window.innerWidth <= 768) {
        return (
            <section id="proyectos">
                <article id={id} key={id} className="proyect">
                    <div>
                        <div className="card_content" >
                            <div className="card_content-header">
                                <h3 className="proyect_title">{title}</h3>
                                <p className="proyect_date">{date}</p>
                            </div>
                            <div className="proyect_img-container">
                                <a className="proyect_btn" href={link} target="_blank" rel="noopener noreferrer">
                                    VER PAGINA
                                </a>
                                <img className="proyect_img" src={require(`${imagen}`)} draggable={false} alt="Web" />
                            </div>
                            <div className="proyect_aptitudes">
                                {aptitudes.map((item, index) => (
                                    <p key={index} className="proyect_aptitudes-item">{item}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        )
    }

    return (
        <section id="proyectos">
            <article id={id} key={id} className="proyect">
                <div className="card">
                    <img className="proyect_img .img" src={require(`${imagen}`)} draggable={false} alt="Web" />
                    <div className="card__content" >
                        <h3 className="proyect_title">{title}</h3>
                        <p className="proyect_date">{date}</p>
                        <div className="proyect_aptitudes">
                            {aptitudes.map((item, index) => (
                                <p key={index} className="proyect_aptitudes-item">{item}</p>
                            ))}
                        </div>
                        <a className="learn-more" href={link} target="_blank" rel="noopener noreferrer">
                            <span className="circle" aria-hidden="true">
                                <span className="icon arrow"></span>
                            </span>
                            <span className="button-text">Ver pagina</span>
                        </a>
                    </div>
                </div>
            </article>
        </section>
    )
}
export default Proyect