import {
    EMPLOYEE_FETCH
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    //console.log(state);
    switch (action.type) {
        case EMPLOYEE_FETCH:
            return action.payload;
        default:
            return state;
    }
}