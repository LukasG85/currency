import { combineReducers } from "redux";
import currencyReducer from "./app/currency";
import transactionsReducer from "./app/transactions";

const rootReducers = combineReducers({
  currency: currencyReducer,
  transactions: transactionsReducer
});

export default rootReducers;
