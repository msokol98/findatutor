import React, { useState, useEffect } from 'react';
import PupilHelp from './PupilHelp';
import TutorHelp from './TutorHelp'
import Modal from 'components/common/modal';

const Help = ({ role, onWelcomeComplete }) => {

    const [show, setShow] = useState(false);

    const closeModal = show => {
        setShow(false);
        onWelcomeComplete(); 
    }

    const header = <h3 className="title has-text-weight-normal">
                        Welcome!
                    </h3>

    const help = role === 'pupil' ? <PupilHelp /> : <PupilHelp />

    if(show)
        return <Modal 
                    header={header} 
                    body={help} 
                    show={show} 
                    setShow={closeModal} /* Modal is only open once */ 
                />
    
    return <></>
}
 
export default Help;