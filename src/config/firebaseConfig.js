import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
    apiKey: "AIzaSyCYgZIh-ddmWvX68a9DyrYrLG6xmN95E1o",
    authDomain: "reactdemo-81b42.firebaseapp.com",
    databaseURL: "https://reactdemo-81b42.firebaseio.com",
    projectId: "reactdemo-81b42",
    storageBucket: "reactdemo-81b42.appspot.com",
    messagingSenderId: "329607381928",
    appId: "1:329607381928:web:cdd2d24cdf2637d76ed39d"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 