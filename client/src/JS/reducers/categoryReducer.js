
import { GET_CATEGORY, ADD_CATEGORY, DELETE_CATEGORY, UPDATE_CATEGORY } from './../constants/actionsTypes';


const initialState = {
    categ: []
}


const categoryReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_CATEGORY:
            return {
                ...state,
                categ: payload
            }
        case GET_CATEGORY:
            return {
                ...state,
                categ: payload,
            };
        case DELETE_CATEGORY:
            return {
                categ: payload,
            }
        case UPDATE_CATEGORY:
            return {
                ...state,
                categ: payload,
            }

        default:
            return state;
    }
}

export default categoryReducer;