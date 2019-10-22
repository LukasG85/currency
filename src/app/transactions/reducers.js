import types from "./types";

const INITIAL_STATE = [
  { name: "waluta 1", currency: 45, currency_converted: 200 },
  { name: "waluta 2", currency: 56, currency_converted: 20 },
  { name: "waluta 3", currency: 79, currency_converted: 20 },
  { name: "waluta 4", currency: 58, currency_converted: 20 },
  { name: "waluta 5", currency: 4, currency_converted: 20 },
  { name: "waluta 6", currency: 23, currency_converted: 20 },
  { name: "waluta 7", currency: 180, currency_converted: 20 }
];

const transactionsReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_TRANSACTION:
      return [...state, action.item];
    case types.DELETE_TRANSACTION:
      return state.filter((data, i) => i !== action.id);
    case types.CHANGE_TRANSACTION:
      return state.map(data => ({
        ...data,
        currency_converted: (data.currency * action.cur).toFixed(2)
      }));
    default:
      return state;
  }
};

export default transactionsReducers;
