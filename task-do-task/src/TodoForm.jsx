import { useState } from 'react';
import PropTypes from "prop-types"

const TodoForm = ({ addTodo }) => {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({
      id: Date.now(),
      taskName,
      description,
      status: 'not completed',
    });
    setTaskName('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Task Name"
        required
        className="input-field"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
        className="input-field"
      />
      <button type="submit" className="add-button">Add Todo</button>
    </form>
  );
};
TodoForm.propTypes = {
  addTodo : PropTypes.string
}
export default TodoForm;
