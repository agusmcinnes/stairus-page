import React, {useEffect} from 'react'
import iconCohete from '.././imagenes/icon_cohete.png'
import iconEstrellas from '.././imagenes/icon_estrellas.png'
import iconEcommerce from '.././imagenes/icon_ecommerce.png'
import iconBlog from '.././imagenes/icon_blog.png'
import { useTranslation} from 'react-i18next';

const Cajas = () => {
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
    <div className='aboutUs__cajas'>
    <div className='aboutUs__cajas-container'>
        <div className='caja aparecer__animacion'>
            <h3 className='caja__type'>Landing-page</h3>
            <p className='caja__info'>{t('services.text-1')}</p>
            <img src={iconCohete} alt="" />
            <span className='border-top'></span>
            <span className='border-right'></span>
            <span className="border-bottom"></span>
            <span className="border-left"></span>

        </div>
        <div className='caja caja_derecha aparecer__animacion'>
            <h3 className='caja__type'>E-Commerce</h3>
            <p className='caja__info'>{t('services.text-2')}</p>
            <img src={iconEcommerce} alt="" />
            <span className='border-top'></span>
            <span className='border-right'></span>
            <span className="border-bottom"></span>
            <span className="border-left"></span>
        </div>
        <div className='caja aparecer__animacion'>
            <h3 className='caja__type'>{t('services.title-3')}</h3>
            <p className='caja__info'>{t('services.text-3')}</p>
            <img src={iconEstrellas} alt="" />
            <span className='border-top'></span>
            <span className='border-right'></span>
            <span className="border-bottom"></span>
            <span className="border-left"></span>
        </div>
        <div className='caja caja_derecha aparecer__animacion'>
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
  )
}

export default Cajas