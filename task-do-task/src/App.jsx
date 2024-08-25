import { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import Filter from './Filter';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const editTodo = (id) => {
    const taskName = prompt('Enter new task name:');
    const description = prompt('Enter new description:');
    setTodos(todos.map(todo => todo.id === id ? { ...todo, taskName, description } : todo));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const changeStatus = (id, status) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, status } : todo));
  };

  return (
    <div className="app-container">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <Filter setFilter={setFilter} />
      <TodoList
        todos={todos}
        filter={filter}
        editTodo={editTodo}
        deleteTodo={deleteTodo}
        changeStatus={changeStatus}
      />
    </div>
  );
};

export default App;
