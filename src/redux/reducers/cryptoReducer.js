import { actionTypes } from "../constants/actionTypes"

const initialState = {
    cryptos: [],
    cryptoSelected: null,
}

export const setCryptoReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case actionTypes.SET_CRYPTO:
            return { ...state, cryptos: payload }
        default:
            return state;
    }
}

export const selectedCryptoReducer = (state = initialState.cryptoSelected, { type, payload }) => {
    switch (type) {
        case actionTypes.SELECTED_CRYPTO:
            return { ...state, cryptoSelected: payload }
        default:
            return state;
    }
}