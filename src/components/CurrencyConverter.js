import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import actions from "../app/currency/actions";
import "./CurrencyConverter.scss";

const CurencyConverter = () => {
  const currency = useSelector(state => state.currency);
  const [value, setValue] = useState(currency);
  const dispatch = useDispatch();
  const handleChange = e => {
    setValue(e.target.value);
  };

  const add = e => {
    e.preventDefault();
    dispatch(actions.addCurrency(value));
  };

  return (
    <div>
      <form onSubmit={add}>
        <div className="container-fluid px-0">
          <div className="row no-gutters">
            <div className="col-md-9">
              <input
                className="currency-input"
                type="text"
                name="currency"
                placeholder="define currency"
                value={value}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-3">
              <button className="add-exchange" type="submit">
                exchange
              </button>
            </div>
          </div>
        </div>
      </form>

      <div className="container-fluid px-0">
        <div className="row no-gutters">
          <div className="col">
            <p className="exchange-rate">1€ = {currency}zł</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurencyConverter;
