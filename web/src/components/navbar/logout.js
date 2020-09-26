import React from 'react';
import userContext from 'context/userContext';

const Logout = () => (
        <userContext.Consumer>
            {user => {
                user.logout();
                localStorage.removeItem('user');
            }}
        </userContext.Consumer>
)

export default Logout;