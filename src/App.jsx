import { useState } from 'react';
import './App.css';

function App() {
  const [task, setTask] = useState('');
  const [todo, setTodo] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState('');

  const addtask = () => {
    if (task.trim() === '') return;
    setTodo([...todo, task]);
    setTask('');
  };

  const deleteTask = (index) => {
    const updateTodo = todo.filter((_, i) => i !== index);
    setTodo(updateTodo);
  };
  const startEditing = (index) => {
  setEditIndex(index);
  setEditText(todo[index]);
};

const saveTask = (index) => {
  if (editText.trim() === '') return;
  const updatedTodo = [...todo];
  updatedTodo[index] = editText;
  setTodo(updatedTodo);
  setEditIndex(null);
  setEditText('');
};
const cancelEdit = () => {
  setEditIndex(null);
  setEditText('');
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
            {editIndex === index ? (
              <>
                <input
                  className="todo-input"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button className="add-btn" onClick={() => saveTask(index)}>Save</button>
                  <button className="delete-btn" onClick={() => cancelEdit()}>Cancel</button>
                </div>
              </>
            ) : (
              <>
                <span>{item}</span>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button className="add-btn" onClick={() => startEditing(index)}>Edit</button>
                  <button className="delete-btn" onClick={() => deleteTask(index)}>Delete</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  </div>
);
}

export default App;

