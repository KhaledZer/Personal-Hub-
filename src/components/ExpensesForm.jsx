import { useState } from 'react';
import Button from './ui/Button';
import Input from './ui/Input';

const ExpensesForm = ({ onAdd }) => {
  const [item, setItem] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(item, parseInt(amount));
    setItem('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <label htmlFor="item">Item:</label>
      <Input id="item" type="text" placeholder="Expense item" value={item} onChange={(e) => setItem(e.target.value)} />
      <label htmlFor="amount">Amount:</label>
      <Input id="amount" type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <Button type="submit">Add Expense</Button>
    </form>
  );
};

export default ExpensesForm;
