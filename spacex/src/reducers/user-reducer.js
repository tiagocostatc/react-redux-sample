import {
    SET_COMPANY,
    SET_USER,
} from "../actions/user-actions";

export const user_initial_state = {
    company: "",
    username: ""
};

export default (state = user_initial_state, action) => {

    switch (action.type) {
        case SET_COMPANY:
            return ({...state, company: action.company});
        case SET_USER:
            return ({...state, username: action.user});
        default:
            return state;
    }
};
