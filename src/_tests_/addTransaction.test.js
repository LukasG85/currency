import actions from "../app/transactions/actions";
import types from "../app/transactions/types";

describe("actions", () => {
  it("Transaction adding test", () => {
    const item = { name: "waluta 1", currency: 45, currency_converted: 200 };
    const expectedAction = {
      type: types.ADD_TRANSACTION,
      item
    };
    expect(actions.add(item)).toEqual(expectedAction);
  });
});
