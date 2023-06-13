import React from "react";
import TodoForm from "./TodoForm";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { markCompleted, deleteTodo } from "../store/actions/todoActions";

const Todos = ({ todos, markCompleted, deleteTodo }) => {
  return (
    <div className="todo-list">
      <TodoForm />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? "completed" : ""}>
            {todo.title}
            <input
              type="checkbox"
              onChange={markCompleted.bind(this, todo.id)}
            />
            <button onClick={deleteTodo.bind(this, todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

Todos.prototype = {
  todos: PropTypes.array.isRequired,
  markCompleted: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  todos: state.myTodos.todos,
});
export default connect(mapStateToProps, { markCompleted, deleteTodo })(Todos);
