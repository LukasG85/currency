import types from "./types";

const INITIAL_STATE = [];

const transactionsReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_TRANSACTION:
      return [...state, action.item];
    case types.DELETE_TRANSACTION:
      return state.filter((data, i) => i !== action.id);
    case types.CHANGE_TRANSACTION:
      return state.map(data => ({
        ...data,
        currency_converted: (data.currency * action.rate).toFixed(2)
      }));
    default:
      return state;
  }
};

export default transactionsReducers;
