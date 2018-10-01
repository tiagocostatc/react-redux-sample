import React from 'react';
import PropTypes from 'prop-types';

export const UserInfo = (props) => {

    return (
        <div>
            Welcome, {props.username} 
            <h1>{props.company}</h1>
        </div>
    )
}

UserInfo.propTypes = {
    username: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired
}