import React, {Component} from 'react';
import Input from "./input";
import Button from "react-bootstrap/Button";
import { Redirect } from "react-router-dom";

import 'bulma/css/bulma.css'

class Form extends Component {

    state = {data: this.props.data};

    transformData = (data) => {
        const formData = [];
        for(let key in data) {
            formData.push({
                name: key,
                config: data[key]
            });
        }
        return formData;
    }

    handleChange = (e, inputId) => {
        const updatedFormData = {...this.state.data};
        const updatedFormEl = {...updatedFormData[inputId]};
        updatedFormEl.value = e.target.value;
        updatedFormData[inputId] = updatedFormEl;
        this.setState({data: updatedFormData});
    }

    isValid = () => {
        this.setState({serverError: false, validationError: false})
        const { validator } = this.props;

        if(!validator) return true;

        const args = validator.args.map(arg => this.state.data[arg].value);
        return validator.isValid(...args);
    }

    handleSubmit = e => {
        e.preventDefault();
        if(this.isValid()) {
            const submission = {};
            for(let key in this.state.data) 
                submission[key] = this.state.data[key].value;

            const { submit } = this.props;
            
            submit.func(submission)
                .then(response => {
                    submit.callback && submit.callback(response);
                    this.setState({redirect: true})
                })
                .catch(error => this.setState({serverError: error.response.data.message}))

        } else 
            this.setState({validationError: true})
    }

    render() {

        const { data, redirect, validationError, serverError } = this.state;
        const { header, submit, validator, extra, precheck } = this.props;

        if(precheck && precheck.private && !localStorage.getItem("jwt"))
            return <Redirect to="/login" />

        if(precheck && !precheck.canProceed()) {
            precheck.error.callback();
            return <Redirect to={precheck.error.href} />
        }

        if(redirect)
            return <Redirect to={submit.href} />

        return(
            <section className="section has-background-white form-wrapper bordered">
                <div className="container">
                    <div className="content">

                        <form onSubmit={this.handleSubmit}>
                            <h3 className="has-text-weight-light">{header}</h3>

                            <br></br>

                            {this.transformData(data).map(element => {

                                return <Input 
                                            type={element.config.elementType}
                                            value={element.config.value} 
                                            name={element.name}  
                                            key={element.name}
                                            elementConfig={element.config.elementConfig}
                                            validation={element.config.validation}
                                            changed={(e) => this.handleChange(e, element.name)}/>
                            })}

                            {validationError && <div className="error">{validator.errorMsg}</div>}
                            {serverError && <div className="error">{serverError}</div>}

                            {extra && extra.jsx()}

                            <Button size="block" type="submit">Submit</Button>
                        </form>
                    </div>
                </div>
            </section>        
        )
    }
}
 
export default Form;