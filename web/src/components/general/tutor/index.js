import React from 'react';
import './styles.css';
import Ratings from 'components/common/ratings';

const Tutor = (props) => {
    const { tutor } = props;

    if(!tutor)
        return <div>Loading...</div>

    return ( 
        <article className='tutor bordered content'>
            <figure className='profile media-left orange is-marginless'>
                <p className='image is-128x128'>
                    <img className='is-rounded' src={tutor.profilePictureURI} alt='tutor' width='128' />
                </p>

                <h5 className='has-text-white'>{tutor.name}</h5>
            </figure>

            
            <div className="bio">
                <div id='bio-one'>
                    <h4 className="has-text-weight-light">Location</h4>

                    {tutor.location && <h4 className="has-text-weight-normal">{tutor.location.city}, {tutor.location.state}</h4>}

                    <br />

                    <h4 className="has-text-weight-light">Subjects</h4>

                    <ul>
                        {tutor.subjects && tutor.subjects.map((subject, i) => <li key={i}>{subject.name}</li>)}
                    </ul>
                </div>

                <div>
                    <h4 className="has-text-weight-light">Member Since</h4>
                    
                    <h4 className="has-text-weight-normal">{tutor.memberSince}</h4>

                    <br />

                    <h4 className="has-text-weight-light">Rating</h4>

                    {tutor.review_details &&
                        <>
                            <Ratings rating={Math.floor(tutor.review_details.avg_rating)} /><br />
                            <a href="#">Read from {tutor.review_details.num} reviews</a>
                        </>
                    }

                </div>
            </div>
        </article>


     );
}
 
export default Tutor;