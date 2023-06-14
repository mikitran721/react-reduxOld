import React, { useEffect } from "react";
import TodoForm from "./TodoForm";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getTodos,
  markCompleted,
  deleteTodo,
} from "../store/actions/todoActions";

const Todos = ({ getTodos, todos, markCompleted, deleteTodo }) => {
  // get Todos
  useEffect(() => {
    getTodos();
    console.log("dang test useEffect");
  }, []);

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
  getTodos: PropTypes.func.isRequired,
  markCompleted: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  todos: state.myTodos.todos,
});
export default connect(mapStateToProps, {
  markCompleted,
  getTodos,
  deleteTodo,
})(Todos);
