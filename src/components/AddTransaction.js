import React, { useState, useEffect } from "react";
import "./AddTransaction.scss";
import { useSelector, useDispatch } from "react-redux";
import actions from "../app/transactions/actions";

const AddTransaction = () => {
  const [transaction, setTransaction] = useState({
    name: "",
    currency: 0,
    currency_converted: null
  });

  const currencyConverter = useSelector(state => state.currency);

  const dispatch = useDispatch();

  const handleChange = e => {
    setTransaction({
      ...transaction,
      [e.target.name]: e.target.value
    });
  };
  useEffect(() => {
    setTransaction(transaction => ({
      ...transaction,
      currency_converted: (transaction.currency * currencyConverter).toFixed(2)
    }));
  }, [currencyConverter, transaction.currency]);

  const addTransaction = e => {
    e.preventDefault();
    dispatch(actions.add(transaction));
    setTransaction({ name: "", currency: 0, currency_converted: null });
  };

  return (
    <form onSubmit={addTransaction}>
      <div className="container-fluid px-0">
        <div className="row no-gutters">
          <div className="col">
            <input
              className="transaction-input"
              type="text"
              name="name"
              placeholder="define name"
              value={transaction.name}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="row no-gutters">
          <div className="col-md-9">
            <input
              className="transaction-input"
              type="number"
              name="currency"
              placeholder="Enter currency"
              value={transaction.currency === 0 ? "" : transaction.currency}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-3">
            <button className="add-transaction" type="submit">
              Add Transaction
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddTransaction;
