import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItm.css';

const ExpenseItem = (props) => {
  // State to hold the updated title
  const [title, setTitle] = useState(props.title);
  // State to hold the updated expense amount
  const [amount, setAmount] = useState(props.amount);

  // Click handler to update title
  const clickHandler = () => {
    setTitle('Updated');
    console.log(title);
  };

  // Click handler to update expense amount
  const updateAmountHandler = () => {
    setAmount(100);
  };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${amount}</div>
        <div>
          {/* Button to update the title */}
          <button onClick={clickHandler}>Update Title</button>
          {/* Button to update the expense amount */}
          <button onClick={updateAmountHandler}>Change Amount to $100</button>
        </div>
      </div>
    </Card>
  );
};

export default ExpenseItem;

