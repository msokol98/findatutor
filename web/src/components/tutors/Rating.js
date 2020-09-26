import ReactStars from 'react-star-ratings'
import React from 'react';
 
const Ratings = ({ rating }) => {
    
    if(!rating || Number.isNaN(rating))
        rating = 2;

    return(
        <ReactStars
            rating={rating}
            starRatedColor="orange"
            numberOfStars={5}
            name='rating'
            starDimension='20px'
            starSpacing='1px'
        />
     );
}
 
export default Ratings;