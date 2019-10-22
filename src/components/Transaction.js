import React from "react";
import "./Transaction.scss";
import { useDispatch } from "react-redux";
import actions from "../app/transactions/actions";

const Transaction = props => {
  const { name, currency, currency_converted } = props.transaction;
  const { index } = props;

  const dispatch = useDispatch();

  const handleRemove = (e, index) => {
    dispatch(actions.remove(index));
  };
  return (
    <>
      <th scope="row">{index + 1}.</th>
      <td>{name}</td>
      <td>{currency}€</td>
      <td>{currency_converted}zł</td>
      <td className="btn-container">
        <button className="remove-btn" onClick={e => handleRemove(e, index)}>
          Remove
        </button>
      </td>
    </>
  );
};

export default Transaction;
