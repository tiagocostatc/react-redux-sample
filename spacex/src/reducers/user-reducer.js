import {
    SET_COMPANY,
    SET_USER,
    SET_SPACE_X_INFO,
} from "../actions/user-actions";

export const user_initial_state = {
    company: "",
    username: "",
    spaceXInfo: undefined
};

export default (state = user_initial_state, action) => {

    switch (action.type) {
        case SET_COMPANY:
            return ({...state, company: action.company});
        case SET_USER:
            return ({...state, username: action.user});
        case SET_SPACE_X_INFO:
            return ({...state, spaceXInfo: action.info});
        default:
            return state;
    }
};
