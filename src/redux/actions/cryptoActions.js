import { actionTypes } from "../constants/actionTypes"

export const setCryptos = (cryptos) => {
    return {
        type: actionTypes.SET_CRYPTO,
        payload: cryptos,
    }
}

export const setSelectedCrypto = (crypto) =>{
    return {
        type: actionTypes.SELECTED_CRYPTO,
        payload: crypto,
    }
}

