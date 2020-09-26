import React from 'react';
import 'bulma/css/bulma.css'

const input = (props) => {
    let element;

    switch(props.type) {
        case ('input'):
            element = <input 
                        className="input"
                        name={props.name}
                        {...props.elementConfig}
                        {...props.validation.rules} 
                        value={props.value} 
                        onChange={props.changed} />
            break;
        case ('textarea'):
            element = <textarea 
                        className="textarea"
                        name={props.name} 
                        {...props.elementConfig} 
                        value={props.value}
                        onChange={props.changed} />
            break;
        case ('select'):
            element = 
                <select                         
                    className="input"
                    name={props.name} 
                    value={props.value} 
                    onChange={props.changed}>
                        {props.elementConfig.options.map(option => 
                            <option key={option.id} value={option.id}>{option.description}</option>
                        )}
                            
                </select>
            break;
        default: 
            element = <input 
                        className="input"
                        name={props.name}  
                        {...props.elementConfig} 
                        value={props.value}
                        onChange={props.changed} />
    }

    return(
        <div className="field">
            <label className="label form-label has-text-gray has-text-weight-light">{getDisplayLabel(props.name)}</label>
            <div className="control">
                {element}
            </div>
        </div>
    )
}

const getDisplayLabel = s => s.replace(/([A-Z])/g, ' $1').trim();
 
export default input;