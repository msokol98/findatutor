import React, { useState, useFfect } from 'react';
import Welcome from './Help';
import axios from 'axios';
import apiHost from 'config';

const WelcomeContainer = ({ updateUser, userId, jwt }) => {

    const onWelcomeComplete = () => {
        axios.post(`${apiHost}/api/persons/welcomed`, {}, {
            params: { id: userId },
            headers: {Authorization: `Bearer ${jwt}`}
        })
            .then(response => setUpdatedUser(response.data));
    }

    const setUpdatedUser = user => {
        localStorage.setItem('user', JSON.stringify(user));
        updateUser(user);
    }

    const [render, setRender] = useState(false);

    const delayRender = () => {
        setTimeout(() => {
            setRender(true);
        }, 1500);    
    } 

    useEffect(delayRender, []);

    if(!render) return <></>

    return ( 
        <Welcome onWelcomeComplete={onWelcomeComplete}/>
     );
}
 
export default WelcomeContainer;