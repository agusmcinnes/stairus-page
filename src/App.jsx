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
import Cajas from './componentes/Cajas.jsx';

import cohete from './imagenes/cohete.webp'
import firstWave from './imagenes/firstWave.webp'
import stairusMockUp from './imagenes/mockUpStairus.webp'
import AbogadosMockUp from './imagenes/mockUpAbogadosMDQnew.webp'
import RDVMockUp from './imagenes/RDVmockup.webp'
import lastWave from './imagenes/lastWave.webp'






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
        <Card mockUp={RDVMockUp} cardType={'Landing Page'} url={'RDVUNIFORMES.COM'} link={'https://rdvuniformes.com/'}></Card>
        </div>
    </section>
    <section className='aboutUs' id='about__us'>
        <img src={lastWave} alt="" className='lastWave' />
        <div className='aboutUs__text'>
            <h2 className='aboutUs__text-title'>{t('aboutus.title')}</h2>
            <p className='aboutUs__text-explicacion'>{t('aboutus.text')}</p>
        </div>
        <Cajas></Cajas>
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
