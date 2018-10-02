import Config from "../config";
import axios from 'axios';

export const SET_COMPANY = "SET_COMPANY";
export const setCompany = (company) => {
    return {type : SET_COMPANY, company};
};

export const SET_USER = "SET_USER";
export const setUser = (user) => {
    return {type : SET_USER, user};
};

export const SET_SPACE_X_INFO = "SET_SPACE_X_INFO";
export const setSpaceXInfo = (info) => {
    return {type: SET_SPACE_X_INFO, info};
}

export const getSpaceXInfo = () => {
    let config = {
        method : "get",
        url : Config.GET_SPACE_X_INFO
    };
    return (dispatch) => {
        return axios.request(config)
            .then((res) => dispatch(setSpaceXInfo(res.data)))
            .catch((e) => console.log(e));
    };
}