import Button from './ui/Button';
import { flexCenter } from '../styles/classes';

const TodoItem = ({ toDo, onDelete, onToggle }) => {
  return (
    <div className={flexCenter}>
      <input
        type="checkbox"
        checked={toDo.completed}
        onChange={() => onToggle(toDo.id)}
      />
      <span className={toDo.completed ? 'line-through text-gray-400' : ''}>
        {toDo.task}
      </span>
      <Button variant="danger" className="ml-auto" onClick={() => onDelete(toDo.id)}>
        Delete
      </Button>
    </div>
  );
};

export default TodoItem;
