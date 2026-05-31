import { useState } from 'react';
import Button from './ui/Button';
import Input from './ui/Input';

const TodoForm = ({ onAdd }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    onAdd(task.trim());
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input type="text" placeholder="New task..." value={task} onChange={(e) => setTask(e.target.value)} />
      <Button type="submit">Add</Button>
    </form>
  );
};

export default TodoForm;
