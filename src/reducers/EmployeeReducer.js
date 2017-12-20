import { 
    EMPLOYEE_UPDATE, 
    EMPLOYEE_CREATE,
    EMPLOYEE_SET_DATA,
    EMPLOYEE_EDIT
} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: '',
    edit: false
} 

export default (state = INITIAL_STATE, action) => {
    console.log(state);
    //console.log(action);
    switch(action.type){
        case EMPLOYEE_UPDATE:
            //[payload.state.prop] INTERPOLATION
            return { ...state, [action.payload.prop]: action.payload.value };
        case EMPLOYEE_SET_DATA:
            return { 
                ...state, 
                name: action.payload.name,
                phone: action.payload.phone,
                shift: action.payload.shift
            }
        case EMPLOYEE_CREATE:
            return INITIAL_STATE;
        default:
            return state;
    }
} 