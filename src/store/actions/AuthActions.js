import {
    LOG_IN,
    REGISTER,
    LOG_OUT
} from './AuthActionTypes';

export const login = credentials => {
    return {
        type: LOG_IN,
        credentials
    }
}

export const register = credentials => {
    return {
        type: REGISTER,
        credentials
    }
}

export const logOut = id => {
    return {
        type: LOG_OUT,
        id
    }
}