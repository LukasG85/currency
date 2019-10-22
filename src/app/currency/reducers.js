import types from "./types";

const INITIAL_STATE = 4.27;

const currencyReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.RATE_CHANGE:
      return action.item;
    default:
      return state;
  }
};

export default currencyReducers;
