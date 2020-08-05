import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextInput = (props) => {
    const {
        label, 
        name,
        value,
        placeholder,
        onChange,
        type,
        error
    } = props;
    return (
        
            <div className="form-group">
                <label htmlFor={name}>{label}</label>
                <input type={type} name={name} id={name} 
                       className={classnames('form-control', {'is-invalid': error})}
                placeholder={placeholder} defaultValue={value}
                onChange={onChange} />
                {
                    error && (
                        <div className="invalid-feedback">
                            {error}
                        </div>
                    )
                }
            </div> 
        
    )
}

TextInput.defaultProps = {
    type: "text"
}

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}

export default TextInput;
