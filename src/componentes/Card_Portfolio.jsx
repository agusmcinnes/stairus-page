import React, { useEffect } from 'react';

const Card = ({ mockUp, cardType, url, link }) => {
    const type = cardType;

    useEffect(() => {
        const skills = document.querySelectorAll('.aparecer__izquierda');
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animacion__izquierda');
                    observer.unobserve(entry.target); // Dejar de observar una vez que se ha animado
                }
            });
        }, { threshold: 0.1 }); // Ajusta el threshold según sea necesario

        // Aplica el observer a cada card
        skills.forEach(skill => observer.observe(skill));

        // Cleanup para desconectar el observer cuando el componente se desmonte
        return () => {
            skills.forEach(skill => observer.unobserve(skill));
        };
    }, []);

    return (
        <div className='aparecer__izquierda'>
            <a className='card' href={link} target='_blank' rel='noopener noreferrer'>
                <img src={mockUp} alt="" className='card__img' />
                <div className='card__info'>
                    <h3 className='card__type'>{type}</h3>
                    <h4 className='card__url'>{url}</h4>
                </div>
            </a>
        </div>
    );
};

export default Card;
