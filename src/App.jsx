import './styles.css';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import NewHeader from './componentes/newHeader'
import Card from './componentes/Card_Portfolio'
import Contacto from './componentes/Contacto';
import Footer from './componentes/Footer.jsx'
import './i18n.jsx';
import { useTranslation} from 'react-i18next';
import ScrollToTop from './componentes/ScrollToTop.jsx';
import React, {useEffect} from 'react';

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
import mcinnes from './imagenes/mcinnes.webp'
import cLogo from './imagenes/c.svg'
import HTML5 from './imagenes/html5.svg'
import CSS3 from './imagenes/css.svg'
import JAVASCRIPT from './imagenes/javascript.svg'
import REACT from './imagenes/react.svg'
import GIT from './imagenes/git.svg'
import GITHUB from './imagenes/github-dark.svg'
import FIGMA from './imagenes/figma.svg'





function App() {
    const {t, i18n} = useTranslation("global");
    
    useEffect(() => {
        const skills = document.querySelectorAll('.aparecer__animacion');
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animacion__skills');
                }
            });
        });
    
        // Aplica el observer a cada skill individualmente
        skills.forEach(skill => observer.observe(skill));
    
        // Cleanup para desconectar el observer cuando el componente se desmonte
        return () => {
            skills.forEach(skill => observer.unobserve(skill));
        };
    }, []);
    

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
    <section className='aboutme'>
            <div className='aboutme__container'>
                <h2 className='aboutme__title'>{t('aboutMe.title')}</h2>
                <div className='mcinnes__card aparecer__animacion'>
                    <h2 className='mcinnes__card-name text' >AGUSTIN MC INNES</h2>
                    <h3 className='mcinnes__card-developer text'>Fronted Developer</h3>
                    <p className='mcinnes__card-text text'>{t('aboutMe.text-1')}</p>
                    <p className='mcinnes__card-text text'>{t('aboutMe.text-2')}</p>
                    <img src={mcinnes} alt="" />
                </div>
                <div className='aboutme__skills'>
                    <h2 className='skills__title'>Skills</h2>
                    <div className='skills__img-container'>
                        <div className='skill aparecer__animacion'> 
                            <img src={cLogo} alt=""  />
                            <span className='skill__name'>C</span>
                        </div>
                        <div className='skill aparecer__animacion'> 
                            <img src={HTML5} alt="" />
                            <span className='skill__name'>HTML</span>
                        </div>
                        <div className='skill aparecer__animacion'> 
                            <img src={CSS3} alt="" />
                            <span className='skill__name'>CSS</span>
                        </div>
                        <div className='skill aparecer__animacion'> 
                            <img src={JAVASCRIPT} alt="" />
                            <span className='skill__name'>JAVASCRIPT</span>
                        </div>
                        <div className='skill aparecer__animacion'> 
                            <img src={REACT} alt="" />
                            <span className='skill__name'>REACT</span>
                        </div>
                        <div className='skill aparecer__animacion'> 
                            <img src={GIT} alt="" />
                            <span className='skill__name'>GIT</span>
                        </div>
                        <div className='skill aparecer__animacion'> 
                            <img src={GITHUB} alt="" />
                            <span className='skill__name'>GITHUB</span>
                        </div>
                        <div className='skill aparecer__animacion'> 
                            <img src={FIGMA} alt="" className='figma'/>
                            <span className='skill__name'>FIGMA</span>
                        </div>
                    </div>
                </div>
            </div>
    </section>
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
