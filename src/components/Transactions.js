import React, { useEffect } from "react";
import "./Transactions.scss";
import { useSelector, useDispatch } from "react-redux";
import action from "../app/transactions/actions";
import Transaction from "./Transaction";

const Transactions = () => {
  const transactions = useSelector(state => state.transactions);
  const exchangeRate = useSelector(state => state.currency);

  const dispatch = useDispatch();

  const getGreatestValue = [...transactions]
    .sort((a, b) => {
      if (a.currency < b.currency) {
        return 1;
      } else {
        return -1;
      }
    })
    .slice(0, 1);

  const sumCurrency = [...transactions].reduce(
    (sum, { currency }) => sum + parseInt(currency),
    0
  );
  const sumCurrencyConvertet = [...transactions].reduce(
    (sum, { currency_converted }) => sum + parseFloat(currency_converted),
    0
  );

  useEffect(() => {
    dispatch(action.changeCurrency(exchangeRate));
  }, [dispatch, exchangeRate]);

  return (
    <div>
      <div className="container-fliud mt-5 px-0">
        <div className="row no-gutters">
          <div className="col-md-8">
            {transactions.length > 0 && (
              <table className="table table-sm table-hover table-transactions">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">Name</th>
                    <th scope="col">€</th>
                    <th scope="col">PLN</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {transactions &&
                    transactions.map((transaction, index) => (
                      <tr className="hover-items" key={index}>
                        <Transaction transaction={transaction} index={index} />
                      </tr>
                    ))}
                </tbody>
              </table>
            )}
          </div>
          <div className="col-md-4">
            {getGreatestValue.length > 0 && (
              <div className="largest-transaction">
                <h2 className="largest-transaction__title">
                  largest transaction
                </h2>
                <div>
                  <p className="largest-transaction__item">
                    <span> Name:</span>
                    <span>{getGreatestValue[0].name}</span>{" "}
                  </p>
                  <p className="largest-transaction__item">
                    <span>Amount in €:</span>
                    <span>{getGreatestValue[0].currency}</span>{" "}
                  </p>
                  <p className="largest-transaction__item">
                    <span>Amount in PLN:</span>
                    <span>{getGreatestValue[0].currency_converted}</span>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="container-fliud mt-5 px-0">
        <div className="row no-gutters">
          <div className="col">
            {transactions.length > 0 && (
              <div className="all-transactions">
                <h2 className="all-transactions__title">
                  the sum of all transactions
                </h2>
                <div className="all-transactions__item">
                  <p>
                    <span>All transactions:</span>
                    <span>{transactions.length}</span>
                  </p>
                  <p>
                    <span>sum in euros: </span>
                    <span>{sumCurrency}</span>
                  </p>
                  <p>
                    <span> sum in PLN:</span>
                    <span>{sumCurrencyConvertet.toFixed(2)}</span>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
