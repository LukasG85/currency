import actions from "../app/currency/actions";
import types from "../app/currency/types";

describe("actions", () => {
  it("Change currency rate", () => {
    const item = 5.7;
    const expectedAction = {
      type: types.RATE_CHANGE,
      item
    };
    expect(actions.addCurrency(item)).toEqual(expectedAction);
  });
});
