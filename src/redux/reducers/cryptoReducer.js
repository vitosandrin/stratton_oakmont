import { actionTypes } from "../constants/actionTypes";

const initialState = {
  cryptos: [],
  cryptoSelected: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_CRYPTO:
      return { ...state, cryptos: action.payload };
    case actionTypes.SELECTED_CRYPTO:
      return { ...state, cryptoSelected: action.payload };
    default:
      return state;
  }
}
