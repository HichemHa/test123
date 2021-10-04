import {
    ADD_LIVREUR, GET_LIVREUR, UPDATE_LIVREUR, DELETE_LIVREUR
} from './../constants/actionsTypes';


const initialState = {
    livreur: []
}

const livreurReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_LIVREUR:
            return {
                livreur: payload
            }
        case GET_LIVREUR:
            return {
                ...state,
                livreur: payload,
            };
        case DELETE_LIVREUR:
            return {
                livreur: payload,
            }
        case UPDATE_LIVREUR:
            return {
                ...state,
                livreur: payload,
            }

        default:
            return state;
    }
}

export default livreurReducer;