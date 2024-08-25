
import TodoItem from './TodoItem';
import PropTypes from "prop-types"


const TodoList = ({ todos, filter, editTodo, deleteTodo, changeStatus }) => {
  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.status === 'completed';
    if (filter === 'not-completed') return todo.status === 'not completed';
    return true;
  });

  return (
    <div className="todo-list">
      {filteredTodos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
          changeStatus={changeStatus}
        />
      ))}
    </div>
  );
};

TodoList.propTypes = {
  todos : PropTypes.string,
  editTodo : PropTypes.string,
  deleteTodo : PropTypes.string,
  changeStatus : PropTypes.string,
  filter: PropTypes.string,
  

}

export default TodoList;
