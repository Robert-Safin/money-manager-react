import './ExpenseItem.css'
import './ExpenseDate'
import ExpenseDate from './ExpenseDate'

function ExpenseItem(props) {
  //title amount date

  return (
    <div className="expense-item">
      <ExpenseDate date={props.expense.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.expense.title}</h2>
        <div className="expense-item__price">${props.expense.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
