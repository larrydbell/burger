import axios from 'axios';

import * as actionTypes from './actionTypes';
import * as GK from './gk';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (authData) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        authData: authData
    };
};

export const authFail = (error) => {
        return {
            type: actionTypes.AUTH_FAIL,
            error: error
        };
};

export const auth = (email, password, isSignup) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }; 
        let url1 = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=';
        if (!isSignup)
            url1 = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=';
        let url = url1.concat(GK.GK);
        axios.post(url, authData)
            .then(response => {
                console.log(response);
                dispatch(authSuccess(response.data));
            })
            .catch(err => {
                console.log(err);
                dispatch(authFail(err));
            })

    };
};