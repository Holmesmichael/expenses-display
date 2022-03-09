import React, { useState } from 'react';
import ExpensesFilter from './ExpensesFilter';
import { ExpensesList } from './ExpensesList';
import { ExpensesChart } from './ExpensesChart';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
    const [changeFilter, setChangeFilter] = useState('2020');

    const filterHandler = (year) => {
        setChangeFilter(year);
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === changeFilter;
    })

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    defaultFilter={changeFilter}
                    onFilteredData={filterHandler}
                />
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    );
}

export default Expenses;