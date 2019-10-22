import types from "./types";

const addCurrency = item => ({ type: types.RATE_CHANGE, item });

export default { addCurrency };
