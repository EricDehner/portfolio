import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contacto.css';

const Contacto = () => {
    const form = useRef();
    const [enviado, setEnviado] = useState(false);
    const [enviando, setEnviando] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        setEnviando(true);

        emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            form.current,
            process.env.REACT_APP_EMAILJS_USER_ID
        )
            .then(() => {
                setEnviado(true);
            })
            .catch((error) => {
                alert('Hubo un error al enviar el correo.', error);
                window.location.reload();
            })
            .finally(() => {
                setEnviando(false);
            });
    };

    return (
        <form id="contacto" className="contact_form" ref={form} onSubmit={sendEmail}>
            <h2 className="contact_form-title">CONTACTO</h2>
            {!enviado ? (
                <>
                    <div className="contact_form-item">
                        <label className="contact_form-item--label">Nombre</label>
                        <input className="contact_form-item--input" type="text" name="user_name" placeholder="Ingrese su nombre" required />
                    </div>
                    <div className="contact_form-item">
                        <label className="contact_form-item--label">Email</label>
                        <input className="contact_form-item--input" type="email" name="user_email" placeholder="Ingrese su email" required />
                    </div>
                    <div className="contact_form-item">
                        <label className="contact_form-item--label">Mensaje</label>
                        <textarea className="contact_form-item--textarea" name="message" placeholder="Ingrese su mensaje" required />
                    </div>
                    <div className="contact_form-btn">
                        <input className="contact_form-btn--btn" type="submit" value={enviando ? 'ENVIANDO...' : 'ENVIAR'} disabled={enviando} />
                    </div>
                </>
            ) : (
                <>
                    <div className="contact_form-item">
                        <label className="contact_form-item--label">Nombre</label>
                        <input disabled={true} className="contact_form-item--input" type="text" name="user_name" placeholder="Ingrese su nombre" required />
                    </div>
                    <div className="contact_form-item">
                        <label className="contact_form-item--label">Email</label>
                        <input disabled={true} className="contact_form-item--input" type="email" name="user_email" placeholder="Ingrese su email" required />
                    </div>
                    <div className="contact_form-item">
                        <label className="contact_form-item--label">Mensaje</label>
                        <textarea disabled={true} className="contact_form-item--textarea" name="message" placeholder="Ingrese su mensaje" required />
                    </div>
                    <div className="contact_form-text">
                        <p className="contact_form-text--text">¡Mensaje enviado con exito!</p>
                    </div>
                </>
            )}
        </form>
    );
};

export default Contacto;