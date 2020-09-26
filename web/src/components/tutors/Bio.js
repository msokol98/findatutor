import React from 'react';
import Rating from './Rating';

const Bio = ({ location, subjects, memberSince, reviewsDetails}) => {

    return ( 
        <div className='tutor-bio content'>
            <div className='tutor-bio-sec'>
                <div>
                    <Header header='Location' />
                    <Info info={`${location.city}, ${location.state}`}/>
                </div>

                <div>
                    <Header header='Subjects' />
                    <ul>
                        {subjects.map(subject => <li key={subject.name}>{subject.name}</li>)}
                    </ul>
                </div>

            </div>

            <div className='tutor-bio-sec'>
                <div>
                    <Header header='Member Since' />
                    <Info info={memberSince} />
                </div>

                <div>
                    <Header header='Rating' />
                    <Rating rating={reviewsDetails.avgRating} /> <br />
                    <a href='/'>Read from {reviewsDetails.num} reviews</a>
                </div>

            </div>
        </div>
     );
}

const Header = ({ header }) => <h4 className='has-text-weight-light'>{header}</h4>

const Info = ({ info }) => <h4 className='has-text-weight-normal'>{info}</h4>
 
export default Bio;