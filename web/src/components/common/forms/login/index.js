import React from 'react';
import { props } from './props';
import Form from '../index';
import apiHost from 'config';
import axios from 'axios';

const LoginForm = ({ storeUser }) => {
    
    props.submit.callback = response => {
        const jwt = response.data.jwt, email = JSON.parse(response.config.data).email;

        axios.get(`${apiHost}/api/persons?email=${email}`, {
            headers: {Authorization: `Bearer ${jwt}`}
        }).then(response => { 
            const user = { jwt, ...response.data };
            storeUser(user);
            localStorage.setItem('user', JSON.stringify(user));
        })
    };


    return (
        <div style={{paddingTop: '3%'}}>
            <Form {...props} />
        </div>
    )
}
 

export default LoginForm;
