import { useState } from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [toDos, setToDos] = useState([]);

  const addToDo = (task) => {
    setToDos([...toDos, { id: Date.now(), task, completed: false }]);
  };

  const deleteToDo = (id) => {
    setToDos(toDos.filter(toDo => toDo.id !== id));
  };

  const toggleComplete = (id) => {
    setToDos(toDos.map(toDo => toDo.id === id ? { ...toDo, completed: !toDo.completed } : toDo));
  };

  return (
    <>
      <TodoForm onAdd={addToDo} />
      <div className="flex flex-col gap-2 mt-4">
        {toDos.length === 0 ? (
          <p className="text-gray-400 text-sm">No tasks yet.</p>
        ) : toDos.map(toDo => (
          <TodoItem
            key={toDo.id}
            toDo={toDo}
            onDelete={deleteToDo}
            onToggle={toggleComplete}
          />
        ))}
      </div>
    </>
  );
};

export default TodoList;
