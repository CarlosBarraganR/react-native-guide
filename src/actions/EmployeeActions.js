import firebase from 'firebase';
import { Actions } from 'react-native-router-flux' 
import { 
    EMPLOYEE_UPDATE, 
    EMPLOYEE_CREATE, 
    EMPLOYEE_FETCH,
    EMPLOYEE_SET_DATA, 
    EMPLOYEE_EDIT 
} from '../actions/types';

export const employeeUpdate = ({ prop, value }) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    }
}

export const employeeReset = () => {
    return{
        type: EMPLOYEE_CREATE
    }
}

export const employeeEdit = ({ name, phone, shift, uid}) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
            .set({ name, phone, shift })
            .then(() => {
                dispatch({ type: EMPLOYEE_CREATE });
                Actions.main();
            });
    }
}

export const employeeCreate = ({ name, phone, shift }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .push({ name, phone, shift })
            .then(() => {
                dispatch({ type: EMPLOYEE_CREATE });
                Actions.main({ type: 'reset' });
            });
    }
}

export const employeeSetData = ({ name, phone, shift }) => {
    return {
        type: EMPLOYEE_SET_DATA,
        payload: { name, phone, shift }
    }
};

export const employeeFetch = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
            .on('value', snapshot => {
                dispatch({ type: EMPLOYEE_FETCH, payload: snapshot.val() });
            });
    }

}

