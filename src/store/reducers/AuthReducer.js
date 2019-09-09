import {
  LOG_IN,
  REGISTER,
  LOG_OUT
} from '../actions/AuthActionTypes'

const initState = {
  isLoggedIn: false,
  user: null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case LOG_IN: {
          return {
            ...state,
            isLoggedIn: true,
            user: {
              userName: action.credentials.email,
              password: action.credentials.password
            }
          }
        }

        case REGISTER: {
          return {
            ...state,
            isLoggedIn: true,
            user: {
              userName: action.credentials.email,
              password: action.credentials.password
            }
          }
        }

        case LOG_OUT: {
          return {
            ...state,
            isLoggedIn: false,
            user: null
          }
        }

        default: return state;
      }
};

export default authReducer;