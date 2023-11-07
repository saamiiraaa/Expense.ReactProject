import React from "react";
import ExpenseDate from "./ExpenseDate";
import card from "../UI/card";
import "./ExpenseItem.css";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <li>
      <card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description" />
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </card>
    </li>
  );
};

export default ExpenseItem;
