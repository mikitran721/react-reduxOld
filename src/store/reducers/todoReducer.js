const initialState = {
  todos: [
    { id: 1, title: "Viec 1", completed: false },
    { id: 2, title: "Viec 2", completed: false },
    { id: 3, title: "Viec 3", completed: false },
    { id: 4, title: "Viec 4", completed: false },
  ],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "MARK_COMPLETED":
      // thay doi state o day - ko dc thay doi truc tiep state
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            todo.completed = !todo.completed;
          }
          return todo;
        }),
      };
    case "ADD_TODO":
      let todoCopy = state.todos;
      todoCopy.unshift(action.payload);
      return {
        ...state,
        todos: [...todoCopy],
      };
    case "DELETE_TODO":
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    default:
      return state;
  }
};

export default todoReducer;
