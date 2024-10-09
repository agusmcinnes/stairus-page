import './styles.css';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import NewHeader from './componentes/newHeader'
import Card from './componentes/Card_Portfolio'
import Contacto from './componentes/Contacto';
import Footer from './componentes/Footer.jsx'
import AboutMe from './componentes/aboutMe.jsx';
import './i18n.jsx';
import { useTranslation} from 'react-i18next';
import ScrollToTop from './componentes/ScrollToTop.jsx';
import React from 'react';

import cohete from './imagenes/cohete.webp'
import firstWave from './imagenes/firstWave.webp'
import stairusMockUp from './imagenes/mockUpStairus.webp'
import AbogadosMockUp from './imagenes/mockUpAbogados.webp'
import RDVMockUp from './imagenes/RDVmockup.webp'
import lastWave from './imagenes/lastWave.webp'
import iconCohete from './imagenes/icon_cohete.png'
import iconEstrellas from './imagenes/icon_estrellas.png'
import iconEcommerce from './imagenes/icon_ecommerce.png'
import iconBlog from './imagenes/icon_blog.png'





function App() {
    const {t, i18n} = useTranslation("global");

    return (
    <Router>
        <ScrollToTop />
    <div className="App">
    <NewHeader/>

    <Routes>
    <Route path="/" element={
            <>
    <main className='first__page'>
        <div className='title'>
            <div className='title__container'>
                <h1 className='stairus__name'>STAIRUS</h1>
                <h2 className='title__subtitle'>{t('firstPage.text-1')}</h2>
                <Link to="/contact" className='green__button'>{t('firstPage.button')}</Link>
            </div>
            <img src={cohete} alt="" className='coheteImg' loading='lazy'/>
        </div>
        <img src={firstWave} alt="" className='firstWave' loading='lazy'/>
    </main>
    <section className='portfolio' id='portafolio'>
        <h2>{t('portfolio.title')}</h2>
        <div className='cards__container'>
        <Card mockUp={stairusMockUp} cardType={'Landing Page'} url={'STAIRUS.NET'} link={'#'}></Card>
        <Card mockUp={AbogadosMockUp} cardType={'Landing Page'} url={'ABOGADOSMDQ.COM'} link ={'https://abogadosmdq.com/'}></Card>
        <Card mockUp={RDVMockUp} cardType={'Landing Page'} url={'RDV.COM'} link={'https://agusmcinnes.github.io/Rdv-Page/'}></Card>
        </div>
    </section>
    <section className='aboutUs' id='about__us'>
        <img src={lastWave} alt="" className='lastWave' />
        <div className='aboutUs__text'>
            <h2 className='aboutUs__text-title'>{t('aboutus.title')}</h2>
            <p className='aboutUs__text-explicacion'>{t('aboutus.text')}</p>
        </div>
        <div className='aboutUs__cajas'>
            <div className='aboutUs__cajas-container'>
                <div className='caja'>
                    <h3 className='caja__type'>Landing-page</h3>
                    <p className='caja__info'>{t('services.text-1')}</p>
                    <img src={iconCohete} alt="" />
                    <span className='border-top'></span>
                    <span className='border-right'></span>
                    <span className="border-bottom"></span>
                    <span className="border-left"></span>

                </div>
                <div className='caja caja_derecha'>
                    <h3 className='caja__type'>E-Commerce</h3>
                    <p className='caja__info'>{t('services.text-2')}</p>
                    <img src={iconEcommerce} alt="" />
                    <span className='border-top'></span>
                    <span className='border-right'></span>
                    <span className="border-bottom"></span>
                    <span className="border-left"></span>
                </div>
                <div className='caja'>
                    <h3 className='caja__type'>{t('services.title-3')}</h3>
                    <p className='caja__info'>{t('services.text-3')}</p>
                    <img src={iconEstrellas} alt="" />
                    <span className='border-top'></span>
                    <span className='border-right'></span>
                    <span className="border-bottom"></span>
                    <span className="border-left"></span>
                </div>
                <div className='caja caja_derecha'>
                    <h3 className='caja__type'>Blog</h3>
                    <p className='caja__info'>{t('services.text-4')}</p>
                    <img src={iconBlog} alt="" />
                    <span className='border-top'></span>
                    <span className='border-right'></span>
                    <span className="border-bottom"></span>
                    <span className="border-left"></span>
                </div>
            </div>
        </div>
    </section>
    <AboutMe></AboutMe>
    </>
        } />

        <Route path="/contact" element={<Contacto />} />
    </Routes>
    <Footer>
    </Footer>
    </div>
    </Router>
);
}

export default App;
