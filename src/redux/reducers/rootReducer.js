import { combineReducers } from "redux";
import { setCryptoReducer, selectedCryptoReducer } from "./cryptoReducer";

const reducers = combineReducers({
    allCrypto: setCryptoReducer,
    crypto: selectedCryptoReducer
})

export default reducers;