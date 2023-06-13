import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addTodo } from "../store/actions/todoActions";
import { v4 as uuidv4 } from "uuid";

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const handleTodoChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title !== "") {
      const newTodo = {
        id: uuidv4(),
        title,
        completed: false,
      };
      addTodo(newTodo);
      setTitle("");
    }
    // goi ham xuly
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          required
          name="title"
          value={title}
          onChange={handleTodoChange}
          placeholder="Vui long nhap todo..."
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

TodoForm.prototype = {
  // todos: PropTypes.array.isRequired,
  addTodo: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  // todos: state.myTodos.todos,
  // addTodo: state.myTodo.addTodo,
});
export default connect(mapStateToProps, { addTodo })(TodoForm);
