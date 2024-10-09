import React from 'react'

const Card = ({mockUp, cardType, url, link}) => {
    const type = cardType;

    return (
    <div key={Card}>
        <a className='card' href={link} target='blank'>
            <img src={mockUp} alt="" className='card__img'/>
            <div className='card__info'>
                <h3 className='card__type'>{type}</h3>
                <h4 className='card__url'>{url}</h4>
            </div>

            
        </a>
    </div>
)
}

export default Card;