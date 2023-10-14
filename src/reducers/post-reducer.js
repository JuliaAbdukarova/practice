import { ACTION_TYPE } from "../actions";

const inistialPostState = {
    id: '',
    title: '',
    imageUrl: '',
    content: '',
    publishedAt: '',
    comments: [],
};

export const postReducer = (state=inistialPostState, action ) => {
    switch (action.type) {
        case ACTION_TYPE.SET_POST_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
};
