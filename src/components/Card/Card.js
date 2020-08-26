import React from 'react';
import './Card.css'



const Card = (props) => {
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <div>
                <img src={`http://robohash.org/set_set5/${props.name}?size=200x200`} alt='robocope' />
            </div>
            <div>
                <h4>{ props.name}</h4>
                <p>{ props.email}</p>
            </div>
        </div>
    );
}

export default Card;