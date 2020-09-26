import React from 'react';

const Help = () => (
    <div className='content' style={{fontSize: '1.125rem', padding: '0px 20px'}}>
        <h4 className='has-text-weight-normal'>We are at your account portal.</h4>

        <div>From here, you can click on 'I need a tutor!'
            We will ask for some basic information, including:

            <ul>
                <li>What subject you want help in</li>
                <li>When you are available</li>
                <li>Where you want to meet</li>
            </ul>
        </div>

        <br />

        <p>Tutors will comment on your request if they are interested. You don't have
           to message dozens of tutors; they come to you. Isn't that great?
        </p>

        <p>
           When you are
           ready, you can choose the the tutor you want to meet. We will then give you
           the tutor's contact information, and the tutor will get your contact information.
        </p>

        <p>
            If you do want to search for tutors in your area, you can click on
            'Browse Tutors' to see a list of tutors with contact information.
        </p>

    </div>
);


export default Help;