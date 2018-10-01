import React from 'react';
import PropTypes from 'prop-types';

export const Login = (props) => {

    return (
        <div>
           Username: <input type="text" onChange={(event) => props.updateUsername(event.target.value)}/>
           Company: <input type="text" onChange={(event) => props.updateCompany(event.target.value)}/>
        </div>
    )
}

Login.propTypes = {
    updateUsername: PropTypes.func.isRequired,
    updateCompany: PropTypes.func.isRequired
}


