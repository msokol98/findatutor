import React from 'react';
import Button from 'react-bootstrap/Button';
import './styles.css';

const ChooseRole = (props) => {
    return(
        <div className='choose-role-container'>
            <section className="section has-background-white form-wrapper bordered">
                <div className="content">

                    <h2 className="subtitle has-text-weight-light" style={{textAlign: 'center'}}>
                            I am signing up as a...
                    </h2>
                    
                    <br />

                    <div className='role-container'>
                        <Role onClick={() => props.chooseRole('pupil')} role='Pupil' imgSrc='pupil.png' />
                        <Role onClick={() => props.chooseRole('tutor')} role='Tutor' imgSrc='tutor2.png' />
                    </div>

                </div>
            </section>
        </div>        
    )
}


const Role = ({ role, imgSrc, onClick }) => {
    return(
        <div style={{padding: '0 50px'}}>
            <img src={imgSrc} width='128px' alt={role} /><br /><br />
            <Button onClick={onClick} size='block' variant='secondary'>{role}</Button>
        </div>
    )
}

export default ChooseRole;