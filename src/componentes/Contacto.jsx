import React, { useRef, useState } from 'react';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';

import INSTAGRAM from '../imagenes/instagram_dark.svg';
import GMAIL from '../imagenes/gmail.svg';
import TIKTOK from '../imagenes/tiktok.svg';
import contactoImg from '../imagenes/contacto_img.webp';
import GITHUB from '../imagenes/github-dark.svg';
import '../i18n.jsx';
import { useTranslation} from 'react-i18next';

const Contacto = () => {
    const form = useRef();
    const {t, i18n} = useTranslation("global");
    const [loading, setLoading] = useState(false); 

    const mostrarAlerta = () => {
        Swal.fire({
        title: t('contact.sending-right'),
        icon: 'success',
        confirmButtonColor: "#4fdc39",
        background: "#222",
        color: "#4fdc39",
        });
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
        .sendForm('service_vcwhltr', 'template_cze6bzy', form.current, {
            publicKey: 'IOSHEBCxzBg2uymhC',
        })
        .then(
            () => {
            setLoading(false);
            mostrarAlerta();
            form.current.reset();
            },
            (error) => {
            setLoading(false);
            console.log('FAILED...', error.text);
            }
        );
    };

    return (
        <section className='contacto'>
        <h2 className='contacto__title'>{t('contact.title')}</h2>
        <div className='form__wrap'>
            <form className='contacto__form' ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_name" placeholder={t('contact.input-1')} className='contacto__input' required />
            <input type="email" name="user_email" placeholder='E-mail' className='contacto__input' required />
            <textarea placeholder={t('contact.text-area')} name="message" className='contacto__textArea' required></textarea>
            <input type='submit' value={t('contact.send')} className='contacto__submit' />
            </form>

            {loading && (
    <div className="modal-overlay">
        <div className="modal-content">
        <h4>{t('contact.sending')}</h4>
        <div className="progress-bar">
            <div className="progress"></div>
        </div>
        </div>
    </div>
    )}


            <img src={contactoImg} alt="" className='contacto__img' loading='lazy' />
        </div>

        <div className='contacto__redes'>
            <a className='red' href='https://www.instagram.com/stairusdev/' target='blank'>
            <img src={INSTAGRAM} alt="" />
            <span className='red__name'>stairusdev</span>
            </a>
            <a className='red' href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new' target='blank'>
            <img src={GMAIL} alt="" />
            <span className='red__name'>stairusdev@gmail.com</span>
            </a>
            <a className='red' href='https://github.com/agusmcinnes' target='blank'>
            <img src={GITHUB} alt=""/>
            <span className='red__name'>AgusMcinnes</span>
            </a>
        </div>
        </section>
    );
    };

export default Contacto;
