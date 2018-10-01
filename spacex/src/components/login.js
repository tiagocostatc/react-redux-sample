import React from 'react';
import { connect } from "react-redux";
import { setUser, setCompany } from '../actions/user-actions';

const LoginComponent = (props) => {

    return (
        <div>
           Username: <input type="text" onChange={(event) => props.setUser(event.target.value)}/>
           Company: <input type="text" onChange={(event) => props.setCompany(event.target.value)}/>
        </div>
    )
}

const mapStateToProps = (store) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        setUser: (user) => dispatch(setUser(user)),
        setCompany: (company) => dispatch(setCompany(company))
    };
};

export const Login = connect(mapStateToProps, mapDispatchToProps)(LoginComponent);




