import React, { useState } from 'react';
import 'bulma/css/bulma.css'
import 'bulma-divider/dist/css/bulma-divider.min.css';
import userContext from 'context/userContext';
import Logout from './logout';

const Nav = () => {

    return (
        <div className='navbar-wrapper navbar-wrapper-custom'>  
            <nav className='navbar ' role='navigation' aria-label='main navigation'>
                <div className='navbar-brand navbar-brand-custom' onClick={() => window.location.pathname='/'} >

                    <div className='navbar-brand-inner'>
                        <img src='education.png' alt='logo' width='40px' />
                        <h5 className='subtitle has-text-weight-normal' style={{margin: '0 10px'}}>Sokol Tutoring Market</h5>
                        <img src='education.png' alt='logo' width='40px' />
                    </div>

                    <a href='/'role='button' className='navbar-burger burger' aria-label='menu' aria-expanded='false' data-target='navbarBasicExample'>
                        <span aria-hidden='true'></span>
                        <span aria-hidden='true'></span>
                        <span aria-hidden='true'></span>
                    </a>
                </div>

                
                <div id='navbarBasicExample' className='navbar-menu' style={{marginLeft: '5px'}}>
                    <div className='navbar-start'>
                        <a href='/about' className='navbar-item'>
                            How It Works
                        </a>

                        <a href='/tutors' className='navbar-item'>
                            Browse Tutors
                        </a>

                </div>

                <div className='navbar-end'>
                    <div className='navbar-item'>
                        <div className='buttons'>
                            <userContext.Consumer>
                                {user => user ? <OptionsWithUser /> : <OptionsWithNoUser />}
                            </userContext.Consumer>
                        </div>
                    </div>
                </div>
            </div>
    
            </nav>
        </div>
    );
}

const OptionsWithNoUser = () => (
    <div>
        <a href='/register' className='button is-info'>
            <strong>Sign up</strong>
        </a>
        <a href='/login' className='button is-light'>
            Log in
        </a>
    </div>
);

const OptionsWithUser = () => {

    const [logout, setLogout] = useState(false);

    if(logout)
        return <Logout />

    return(
        <div>
            <a href='/portal' className='button is-info'>
                <strong>Account Portal</strong>
            </a>
            <button onClick={() => setLogout(true)} className='button is-light'>
                Logout
            </button>
        </div>
    )
};

 
export default Nav;