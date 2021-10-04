const { GET_PRODUCT_BY_ID, GET_PRODUCT_BY_FAIL, GET_PRODUCT_BY_SUCCESS, FILTER_NAME } = require('../constants/actionsTypes');

const initialState = {
    loading: false,
    errors: null,
    product: null,
    filterByName: null
}

const filterReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_PRODUCT_BY_ID:
            return {
                ...state,
                loading: true
            }
        case GET_PRODUCT_BY_SUCCESS:
            return {
                ...state,
                loading: false,
                product: payload,
            };
        case GET_PRODUCT_BY_FAIL:
            return {
                ...state,
                loading: false,
                errors: payload,
            }
        case FILTER_NAME:
            return {
                ...state,
                filterByName: payload,
            }

        default:
            return state;
    }
}

export default filterReducer;