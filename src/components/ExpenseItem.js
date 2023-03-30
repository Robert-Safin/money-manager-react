import './ExpenseItem.css'

function ExpenseItem() {
  return (
    <div className="expense-item">
      <h2>January 11 2022</h2>
      <div className="expense-item__description">
        <h2>Bootcoomp</h2>
        <div className="expense-item__price">$7000</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
