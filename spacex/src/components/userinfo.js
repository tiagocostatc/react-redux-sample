import React from 'react';
import { connect } from "react-redux";

const UserInfoComponent = (props) => {

    return (
        <div>
            Welcome, {props.username} 
            <h1>{props.company}</h1>
        </div>
    )
}

const mapStateToProps = (store) => {
    const {username,company} = store.userReducer;
    return {
        username,company
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export const UserInfo = connect(mapStateToProps, mapDispatchToProps)(UserInfoComponent);
