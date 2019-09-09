import authReducer from './AuthReducer'
import homeReducer from './HomeReducer'
import { firestoreReducer } from 'redux-firestore';
import { firebaseRecuder } from 'react-redux-firebase';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: authReducer,
  home: homeReducer,
  firestore: firestoreReducer,
  firebase: firebaseRecuder
});

export default rootReducer