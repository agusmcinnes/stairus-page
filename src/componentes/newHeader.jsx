import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../imagenes/LOGO_STAIRUS.webp';
import banderaEspaña from '../imagenes/Bandera_de_España.webp';
import banderaEEUU from '../imagenes/bandera_EEUU.webp';
import Navbar from './nav';

const NewHeader = () => {
  const { i18n } = useTranslation();
  const [isActive, setIsActive] = useState(false);
  const [selectedLang, setSelectedLang] = useState(banderaEspaña); // Estado inicial con la bandera de España

  // Cambiar idioma
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang.toLowerCase()); // Cambia el idioma (es o en)
    setSelectedLang(lang === 'es' ? banderaEspaña : banderaEEUU); // Cambia la bandera mostrada
    setIsActive(false); // Cierra el menú desplegable
  };

  return (
    <header className='header'>
      <img src={logo} alt="Logo Stairus" className="logo" />
      <Navbar />
      <div className='idiomas'>
        <div className="custom-select" onClick={() => setIsActive(!isActive)}>
          <div className="selected">
            <img src={selectedLang} alt="Selected Language" className="banderaSelected" /> {/* Bandera seleccionada */}
          </div>
          {isActive && (
            <ul className="options">
              <li className="option" onClick={() => changeLanguage('es')}>
                <img src={banderaEspaña} alt="Español" className='bandera'/>
              </li>
              <li className="option" onClick={() => changeLanguage('en')}>
                <img src={banderaEEUU} alt="English" className='bandera'/>
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default NewHeader;
