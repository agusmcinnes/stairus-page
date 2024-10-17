import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faBars } from '@fortawesome/free-solid-svg-icons';
import '../i18n.jsx';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const { t } = useTranslation("global");
    const [menuVisible, setMenuVisible] = useState(false);
    const location = useLocation(); // Hook para obtener la ruta actual

    const abrirMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const cerrarMenu = () => {
        setMenuVisible(false);
    };

    return (
        <div className='header__item'>
            <button className='open__button' onClick={abrirMenu} title='menu'>
                <FontAwesomeIcon icon={faBars} />
            </button>
            <div className={`Nav ${menuVisible ? 'visible' : ''}`}>
                <div className='Nav__container'>
                    <button className='close__button' onClick={cerrarMenu} title='close'>
                        <FontAwesomeIcon icon={faX} />
                    </button>
                    <ul className='Nav__list'>
                        <li className="Nav__item">
                            <Link 
                                to="/" 
                                onClick={cerrarMenu}
                                className={location.pathname === '/' ? 'active-link' : ''}
                            >
                                {t('header.home')}
                            </Link>
                        </li>
                        <li className="Nav__item">
                            <Link 
                                to="/contact" 
                                onClick={cerrarMenu}
                                className={location.pathname === '/contact' ? 'active-link' : ''}
                            >
                                {t('header.contact')}
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
