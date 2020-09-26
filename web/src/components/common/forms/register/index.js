import React, { useState } from 'react';
import './styles.css';
import './ChooseRole';
import Form from 'components/common/forms';
import pupilProps from './pupilProps';
import tutorProps from './tutorProps';
import ChooseRole from './ChooseRole';

const Register = (props) => {

    const [role, setRole] = useState();
    const [roleChosen, setRoleChosen] = useState(false);

    const decideRole = role => {
        setRole(role);
        setRoleChosen(true);
    }

    return(
        <>
            {!roleChosen ? 
                <ChooseRole chooseRole={decideRole} />
            :
                
                <div style={{paddingTop: '3%'}}>
                    {role === 'pupil' ? 
                        <Form {...pupilProps} />
                    :
                        <Form {...tutorProps} />}
                </div>

            } 

        </>
    )
}

export default Register;