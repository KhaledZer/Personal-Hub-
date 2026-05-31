import { useState } from 'react';
import ExpensesForm from './ExpensesForm';
import ExpensesList from './ExpensesList';

const ExpenseTracker = () => {
  // expense shape: { id: 1723456789, item: 'Coffee', amount: 4 }
  const [expenses, setExpenses] = useState([]);

  const addExpense = (item, amount) => {
    setExpenses([...expenses, { id: Date.now(), item, amount }]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  return (
    <>
      <ExpensesForm onAdd={addExpense} />
      <ExpensesList expenses={expenses} onDelete={deleteExpense} />
    </>
  );
};

export default ExpenseTracker;
