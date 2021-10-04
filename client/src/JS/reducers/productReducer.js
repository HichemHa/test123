import { EDIT_PRODUCT, EDIT_PRODUCT_SUCCESS, EDIT_PRODUCT_FAIL, DELETE_PRODUCT, DELETE_PRODUCT_FAIL, DELETE_PRODUCT_SECCESS } from './../constants/actionsTypes';
const { GET_PRODUCT,
    GET_PRODUCT_FAIL,
    GET_PRODUCT_SUCCESS,
    ADD_PRODUCT,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_FAIL, } = require('../constants/actionsTypes');

const initialState = {
    loading: false,
    errors: null,
    product: null,
}

const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_PRODUCT:

            return {
                ...state,
                loading: true,
            };
        case GET_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                product: payload,
            };
        case GET_PRODUCT_FAIL:
            return {
                ...state,
                loading: false,
                errors: payload,
            }
        case ADD_PRODUCT:
            return {
                ...state,
                loading: true,
            }
        case ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                product: payload,
            }
        case ADD_PRODUCT_FAIL:
            return {
                ...state,
                loading: false,
                errors: payload,
            }
        case EDIT_PRODUCT:
        case DELETE_PRODUCT :
            return {

                loading: true,

            }
        case DELETE_PRODUCT_SECCESS:
        case EDIT_PRODUCT_SUCCESS:
            return {
                product :payload,
                loading: false,

            }
        case DELETE_PRODUCT_FAIL:
        case EDIT_PRODUCT_FAIL:
            return {

                loading: false,
                errors:payload
            }
        default:
            return state;
    }
}
export default productReducer;