import './NewExpense.css'
import './ExpenseForm.css'
import ExpenseForm from './ExpenseForm'


const NewExpense = (props) => {

  const onFormSubmitHandler = (formData) => {
  const expenseData = {
    ...formData,
    id: Math.random().toString()
  }
  props.onAddExpense(expenseData)
  }
  return(
    <div className='new-expense'>
        <ExpenseForm onFormSubmit={onFormSubmitHandler}/>
    </div>

  )
}

export default NewExpense
