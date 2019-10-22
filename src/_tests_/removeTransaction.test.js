import actions from "../app/transactions/actions";
import types from "../app/transactions/types";

describe("actions", () => {
  it("Transaction removing test", () => {
    const id = 2;
    const expectedAction = {
      type: types.DELETE_TRANSACTION,
      id
    };
    expect(actions.remove(id)).toEqual(expectedAction);
  });
});
