import React from 'react';
import axios from 'axios';
import apiHost from 'config';

export let props = {
    header: "Sign In",
    data: {
        email: {
            elementType: "input",
            elementConfig: {
                type: "text"
            },
            value: "",
            validation: {
                rules: {
                    required: true
                }
            }
        },
        password: {
            elementType: "input",
            elementConfig: {
                type: "password"
            },
            value: "",
            validation: {
                rules: {
                    required: true
                }
            }
        }
    },
    submit: {
        func: authRequest => axios.post(`${apiHost}/authenticate`, authRequest),
        callback: null,
        href: "/portal"
    },
    extra: {
        jsx: () => 
            <div style={{margin: "20px 0", textAlign: "center"}}>
                <div>Don't have an account?<a style={{marginLeft: "5px"}} href="/register">Sign up</a></div>
            </div>
    }
}


