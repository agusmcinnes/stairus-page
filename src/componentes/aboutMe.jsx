import React, {useEffect} from 'react'
import mcinnes from '.././imagenes/mcinnes.webp'
import cLogo from '.././imagenes/c.svg'
import HTML5 from '.././imagenes/html5.svg'
import CSS3 from '.././imagenes/css.svg'
import JAVASCRIPT from '.././imagenes/javascript.svg'
import REACT from '.././imagenes/react.svg'
import GIT from '.././imagenes/git.svg'
import GITHUB from '.././imagenes/github-dark.svg'
import FIGMA from '.././imagenes/figma.svg'
import { useTranslation } from 'react-i18next';


const AboutMe = () => {
    const {t, i18n} = useTranslation("global");
    useEffect(() => {
        const skills = document.querySelectorAll('.aparecer__animacion');
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animacion__skills');
                }
                else{
                    entry.target.classList.remove('animacion__skills');
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
)
}

export default AboutMe