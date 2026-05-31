import Button from './ui/Button';
import { flexBetween, flexCenter } from '../styles/classes';

const ExpensesList = ({ expenses, onDelete }) => {
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  return (
    <div className="flex flex-col gap-2 mt-4">
      {expenses.length === 0 ? (
        <p className="text-gray-400 text-sm">No expenses yet.</p>
      ) : expenses.map((expense) => (
      
        <div className={flexBetween} key={expense.id}>
          <span>{expense.item}</span>
          <div className={flexCenter}>
            <span>${expense.amount.toFixed(2)}</span>
            <Button variant="danger" onClick={() => onDelete(expense.id)}>
              Delete
            </Button>
          </div>
        </div>
      ))}
      <hr className="border-gray-200 mt-2" />
      <div className={flexBetween}>
        <span className="font-bold">Total:</span>
        <span className="font-bold">${total.toFixed(2)}</span>
      </div>
    </div>
  );
};
export default ExpensesList;
