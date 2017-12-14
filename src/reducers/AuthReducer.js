import { 
    EMAIL_CHANGED, 
    PASS_CHANGED, 
    USER_LOGIN_SUCCESS, 
    USER_LOGIN_FAIL, 
    USER_LOGIN 
} from '../actions/types';

const INITIAL_STATE = { 
    email: '' , 
    pass: '', 
    loading: false, 
    user: null, 
    error: ''
};

export default (state = INITIAL_STATE, action) => {
    //console.log(action);
    console.log(state);
    switch(action.type){
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case PASS_CHANGED:
            return { ...state, pass: action.payload };
        case USER_LOGIN:
            return { ...state, loading: true, error: '' };
        case USER_LOGIN_SUCCESS:
            return { ...state, ...INITIAL_STATE, user: action.payload };
        case USER_LOGIN_FAIL:
            return { ...state, error: 'Authentication Error... Try Again', loading: false };
        default:
            return state;
    }
};
