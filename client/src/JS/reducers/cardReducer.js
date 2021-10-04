import {
    ADD_TO_CARD, DELETE_FROM_CARD, GET_CARD, UPDATE_CARD,
    QUANT_INCRIMENT, QUANT_DECRIMENT, PALCE_ORDER,
    PALCE_ORDER_SUCCESS,
    PALCE_ORDER_FAIL,
    GET_ORDER_FAIL,
    GET_ORDER,
    GET_ORDER_SUCCESS,
    CONFIRM_ORDER,
    CONFIRM_ORDER_SUCCESS,
    CONFIRM_ORDER_FAIL,
    DELETE_ORDER, DELETE_ORDER_SUCC, DELETE_ORDER_FAIL
} from './../constants/actionsTypes';

const initialCard = {
    card: [],
    user: null,
    somme: 0,
    allcard: [],
    loading: false,
    errors: null,
    act: null
}
const cardReducer = (state = initialCard, { type, payload }) => {
    switch (type) {
        case ADD_TO_CARD:
            return {
                ...state,
                card: state.card.concat(payload),
            }
        case GET_CARD:
            return {
                ...state
            }
        case DELETE_FROM_CARD:
            return {
                ...state,
                card: state.card.filter((el, i) => i != payload)
            }
        case UPDATE_CARD:
            return {
                ...state,
                card: state.card.map((el) => el._id === payload.id ? el.qtn = payload.qtn : el)
            }
        case QUANT_INCRIMENT:
            return {
                ...state,
                card: state.card.filter((el, i) => i == payload ? el.quantit++ : [])
            }
        case QUANT_DECRIMENT:
            return {
                ...state,
                card: state.card.filter((el, i) => i == payload ? el.quantit-- : [])
            }
        case PALCE_ORDER:

            return {
                ...state,

            }
        case CONFIRM_ORDER:
        case GET_ORDER:
            return {
                ...state,
                loading: true
            }
        case GET_ORDER_SUCCESS:
        case CONFIRM_ORDER_SUCCESS:
            return {
                ...state,
                allcard: payload,
                loading: false
            }
        case GET_ORDER_FAIL:
        case CONFIRM_ORDER_FAIL:
            return {
                loading: false,
                errors: payload
            }
        case DELETE_ORDER:
            return {
                ...state,
                loading: true,
            }
        case DELETE_ORDER_SUCC:
            return {
                ...state,
                loading: false,
                card: payload,
            }
        case DELETE_ORDER_FAIL:
            return {
                errors: payload
            }
        default:
            return state;

    }
}

export default cardReducer;