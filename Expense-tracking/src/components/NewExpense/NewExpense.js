import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';
const NewExpense = (props) => {

    const [showAddExpense, setShowAddExpense] = useState(false);

    const saveExpenseDataHandler = enteredExpenseData => {
        const expenseData = {
                ...enteredExpenseData,
                id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        console.log(expenseData);
    };

    const toggleAddNewItem = () => {
        setShowAddExpense(!showAddExpense)
    }

    return (
        <div className='new-expense'>
            {!showAddExpense
                ? 
      <button className = "new-expense-button" type="button" onClick={toggleAddNewItem}>Add Expense</button>
      : 
      <ExpenseForm onSaveExpenseData ={saveExpenseDataHandler} toggleAddNewItem={toggleAddNewItem}/>
      }
                
        </div>
    );
};

export default NewExpense;