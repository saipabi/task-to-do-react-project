
import PropTypes from "prop-types"

const TodoItem = ({ todo, editTodo, deleteTodo, changeStatus }) => {
  const { id, taskName, description, status } = todo;

  return (
    <div className="todo-card">
      <h3>{taskName}</h3>
      <p>{description}</p>
      <div>
        <select
          value={status}
          onChange={(e) => changeStatus(id, e.target.value)}
          className="status-dropdown"
        >
          <option value="not completed">Not Completed</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <button onClick={() => editTodo(id)} className="edit-button">Edit</button>
      <button onClick={() => deleteTodo(id)} className="delete-button">Delete</button>
    </div>
  );
};

TodoItem.propTypes = {
  todo : PropTypes.object,
  editTodo : PropTypes.object,
  deleteTodo : PropTypes.object,
  changeStatus : PropTypes.object,
  id: PropTypes.object,
  taskName: PropTypes.object,
  description: PropTypes.object,
  status: PropTypes.object,

}

export default TodoItem;
