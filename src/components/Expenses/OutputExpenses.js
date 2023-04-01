
import './OutputExpenses.css'
import ExpenseItem from './ExpenseItem'

const OutputExpenses = (props) => {


  if (props.output.length === 0) {
    return <h2 className='expenses-list__fallback'>No expenses found</h2>
  }


  return (
    <ul className='expenses-list'>
      {props.output.map((expense) => {
      return <ExpenseItem key={expense.id} expense={expense} />;
    })}
    </ul>
  )
}
export default OutputExpenses
