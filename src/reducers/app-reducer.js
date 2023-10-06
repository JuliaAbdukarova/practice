import { ACTION_TYPE } from "../actions";

const inistialAppState = {
    wasLogout: false,
};

export const appReducer = (state = inistialAppState, action ) => {
    switch (action.type) {
        case ACTION_TYPE.LOGOUT:
        return {
            ...state,
            wasLogout: !state.wasLogout,
        }
        default:
            return state;

    }
};
