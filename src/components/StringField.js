import React from 'react'

export default StringField = ({ label, ...inputProps }) => {
    return (
        <div>
            {label && <label>{label}</label>}
            <StringInput {...inputProps} />
        </div>
    );
}