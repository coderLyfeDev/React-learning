import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from "./ExpensesFilter";
import { useState } from 'react';
import ExpensesList from './ExpensesList'
import ExpensesChart from './ExpensesChart';
const Expenses = (props) => {

    const [selectedYear, setSelectedYear] = useState('2021')

    const filterExpense =  year => {
        setSelectedYear(year);
        console.log(Array.isArray(props.expenses));
      }

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === selectedYear;
    });

    return(
        <div>
        <Card className='expenses'>
        <ExpensesFilter selectedYear={selectedYear} onFilterExpenses={filterExpense}/>
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items = {filteredExpenses}/>
        </Card>
        </div>
    );
}

export default Expenses;