import React from 'react';
import Avatar from 'components/common/avatar';
import Bio from './Bio';

const Tutor = ({ tutor }) => {

    return ( 
        <div className='tutor has-background-white bordered'>
            <div className='orange tutor-avatar'>
                <Avatar name={tutor.name} imageURI={tutor.profilePictureURI} />
            </div>

            <Bio 
                location={tutor.location} 
                subjects={tutor.subjects} 
                reviewsDetails={tutor.reviewsDetails} 
                memberSince={tutor.memberSince}
            />
        </div>
     );
}
 
export default Tutor;