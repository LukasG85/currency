import actions from "../app/transactions/actions";
import types from "../app/transactions/types";

describe("actions", () => {
  it("Transaction change rate", () => {
    const rate = 4.4;
    const expectedAction = {
      type: types.CHANGE_TRANSACTION,
      rate
    };
    expect(actions.changeCurrency(rate)).toEqual(expectedAction);
  });
});
