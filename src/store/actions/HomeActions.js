import {
    CREATE_ITEM_SUCCESS,
    CREATE_ITEM_ERROR,
    DELETE_ITEM
} from './HomeActionTypes';

export const addNewItem = item => {
    return (dispatch, getState, {getFireBase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('products').add({
            ...item,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: CREATE_ITEM_SUCCESS });
          }).catch(err => {
            dispatch({ type: CREATE_ITEM_ERROR }, err);
          });
    }
}

export const deleteItem = id => {
    return (dispatch, getState, {getFireBase, getFirestore }) => {
        getFirestore().collection('products').doc(id).delete().then(() => {
            dispatch({ type: DELETE_ITEM })
        });
    }
}