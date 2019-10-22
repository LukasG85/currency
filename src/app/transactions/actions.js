import types from "./types";

const add = item => ({ type: types.ADD_TRANSACTION, item });

const remove = id => ({ type: types.DELETE_TRANSACTION, id });

const changeCurrency = rate => ({
  type: types.CHANGE_TRANSACTION,
  rate
});

export default { add, remove, changeCurrency };
