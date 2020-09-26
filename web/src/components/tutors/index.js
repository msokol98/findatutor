import React from 'react';
import Tutors from './TutorsList';
import './styles.css';

const TutorsWrapper = () => (
    <div className='tutors-wrapper'>
        <h2 className='title has-text-weight-normal'>Our Tutors</h2>

        <Tutors />
    </div>
)

export default TutorsWrapper;