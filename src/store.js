import { createStore } from "redux";
import rootReducers from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

let store = createStore(rootReducers, composeWithDevTools());
export default store;
