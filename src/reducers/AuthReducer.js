import { EMAIL_CHANGED, PASS_CHANGED } from '../actions/types';

const INITIAL_STATE = { email: '' , pass: '' };

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case EMAIL_CHANGED:
            console.log(state);
            return { ...state, email: action.payload };
        case PASS_CHANGED:
            console.log(action);
            return { ...state, pass: action.payload };
        default:
            return state;
    }
};
