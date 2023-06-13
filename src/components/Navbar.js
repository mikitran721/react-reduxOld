import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Navbar = ({ todos: todos }) => {
  return (
    <div className="navbar">
      <h1>My redux todos app</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Total todos: {todos.length}</li>
      </ul>
    </div>
  );
};
Navbar.prototype = {
  todos: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  todos: state.myTodos.todos,
});
export default connect(mapStateToProps, {})(Navbar);
