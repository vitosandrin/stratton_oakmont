import { actionTypes } from "../constants/actionTypes"

export const setCryptos = (cryptos) => {
    return {
        type: actionTypes.SET_CRYPTO,
        payload: cryptos,
    }
}

export const selectedCrypto = (crypto) =>{
    return {
        type: actionTypes.SELECTED_CRYPTO,
        payload: crypto,
    }
}

