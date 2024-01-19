import "./Contacto.css"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contacto = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAILJS_USER_ID).then((result) => {
            console.log(result.text);
            alert('Correo enviado exitosamente.');
        })
            .catch((error) => {
                console.log(error.text);
                alert('Hubo un error al enviar el correo.');
            });
    };

    return (
        <form id="contacto" className="contact_form" ref={form} onSubmit={sendEmail}>
            <h2 className="contact_form-title">CONTACTO</h2>
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
                <input className="contact_form-btn--btn" type="submit" value="ENVIAR" />
            </div>
        </form>
    );
};

export default Contacto;