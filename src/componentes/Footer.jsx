import React from 'react'
import logo from '../imagenes/LOGO_STAIRUS.webp';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import '../i18n.jsx';
import { useTranslation} from 'react-i18next';

const Footer = () => {
  const {t, i18n} = useTranslation("global");

  return (
    <footer className='footer'>
        <img src={logo} alt="" />
        <h3 className='footer__name'>STAIRUS</h3>
        <Link to='/contact' className='footer__link'>{t('header.contact')}</Link>
    </footer>
  )
}

export default Footer;