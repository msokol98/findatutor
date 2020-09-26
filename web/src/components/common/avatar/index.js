import React from 'react';
import './styles.css';

const Avatar = ({ name, email, imageURI }) => {
    return(
        <figure className='avatar'>
            <p className='image is-128x128'>
                <img className='is-rounded' src={imageURI} width='128px' alt='avatar' />
            </p>

            <h5 className='has-text-white'>{name}</h5>
      </figure>
    )
}
 
export default Avatar;