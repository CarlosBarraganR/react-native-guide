import firebase from 'firebase';
import { Actions } from 'react-native-router-flux'; //To move around scenes
import { 
    EMAIL_CHANGED, 
    PASS_CHANGED, 
    USER_LOGIN_SUCCESS, 
    USER_LOGIN_FAIL, 
    USER_LOGIN 
} from './types';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passChanged = (text) => {
    return {
        type: PASS_CHANGED,
        payload: text
    }
}

export const loginUser = ({ email, pass }) => {
    return (dispatch) => {

        dispatch({ type: USER_LOGIN })

        firebase.auth().signInWithEmailAndPassword(email, pass)
        .then(
            user => {
                dispatch({ type: USER_LOGIN_SUCCESS, payload: user });
                Actions.main();
            }
        )
        .catch(
            (error) => {
                console.log(error);
                dispatch({ type: USER_LOGIN_FAIL });
            }
        )
    }
}