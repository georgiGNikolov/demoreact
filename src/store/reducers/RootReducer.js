import authReducer from './AuthReducer'
import homeReducer from './HomeReducer'
import exampleReducer from '../../reduxexample/reducers/ExampleReducer'
import { firestoreReducer } from 'redux-firestore';
import { firebaseRecuder } from 'react-redux-firebase';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: authReducer,
  home: homeReducer,
  example: exampleReducer,
  firestore: firestoreReducer,
  firebase: firebaseRecuder
});

export default rootReducer