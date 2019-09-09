import {
    CREATE_ITEM_ERROR,
    CREATE_ITEM_SUCCESS,
    DELETE_ITEM
} from '../actions/HomeActionTypes';

const initialState =  {
    items: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {    
        //TODO maybe handle errors somehow... a message for example
        case CREATE_ITEM_SUCCESS: {
            return state;
        }
        
        case CREATE_ITEM_ERROR: {
            return state;
        }
        
        case DELETE_ITEM: {
            return state;
        }

        default: return state;
    }
}


export default reducer;