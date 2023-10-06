import { ACTION_TYPE } from '../actions';
import {ROLE} from '../bff/constants'

const inistialUserState = {
    id: null,
    login: null,
    roleid: ROLE.GUEST,
    session: null,
};

export const userReducer = (state=inistialUserState, action ) => {
    switch (action.type) {
        case ACTION_TYPE.SET_USER:
            return {
                ...state,
                ...action.payload,
            }


        case ACTION_TYPE.LOGOUT:
            return inistialUserState;


        default:
            return state;

    }
};
