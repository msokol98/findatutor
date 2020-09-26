import axios from 'axios';
import apiHost from 'config';

const registrationForm = {
    header: "Sign Up as a Pupil",
    data: {
        firstName: {
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
        lastName: {
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
        },
        passwordConfirmation: {
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
    validator: {
        args: ["password", "passwordConfirmation"],
        isValid: (password, passwordConfirmation) => password === passwordConfirmation,
        errorMsg: "The given passwords do not match.",
    },
    submit: {
        func: newUser => axios.post(`${apiHost}/register/pupil`, {...newUser, memberSince: new Date()}),
        href: "/login"
    }
}

export default registrationForm;