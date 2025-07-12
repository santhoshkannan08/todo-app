import { useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [todo, setTodo] = useState([]);

  const addtask = () => {
    if (task.trim() === '') return;
    setTodo([...todo, task]);
    setTask('');
  };

  const deleteTask = (index) => {
    const updateTodo = todo.filter((_, i) => i !== index);
    setTodo(updateTodo);
  };

  return (
    <div className="app-bg">
      <div className="todo-card">
        <h1 className="todo-title">Todo App</h1>
        <div className="input-row">
          <input
            className="todo-input"
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter your task"
          />
          <button className="add-btn" onClick={addtask}>Add Task</button>
        </div>
        <ul className="list-container">
          {todo.map((item, index) => (
            <li className="list-item" key={index}>
              <span>{item}</span>
              <button className="delete-btn" onClick={() => deleteTask(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

