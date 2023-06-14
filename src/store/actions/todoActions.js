import axios from "axios";
import { ADD_TODO, MARK_COMPLETED, DELETE_TODO, GET_TODOS } from "../types";
// export const markCompleted = () => {
//   const markCompleteAction = (dispatch) => {
//     dispatch({
//       type: "MARK_COMPLETED",
//       payload: "my payload",
//     });
//   };
//   return markCompleteAction;
// };

/**
 *  actionn o day noi sang reducers
 * action nay dc noi den action gui toi reducers
 */

/* get data from API */
export const getTodos = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/todos?_limit=5`
    );
    dispatch({
      type: GET_TODOS,
      payload: response.data,
    });
  } catch (error) {
    console.error(error);
  }
};

/** cach viet nhanh, ham tra ve 1 ham */
export const markCompleted = (id) => (dispatch) => {
  dispatch({
    type: MARK_COMPLETED,
    payload: id,
  });
};

/* using shift+alt + a  */

/*  ham add-todo */
export const addTodo = (todo) => async (dispatch) => {
  try {
    await axios.post("https://jsonplaceholder.typicode.com/todos", todo);
    dispatch({
      type: ADD_TODO,
      payload: todo,
    });
  } catch (error) {
    console.error(error);
  }
};

/* ham deleteTodo */
export const deleteTodo = (id) => async (dispatch) => {
  try {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    dispatch({
      type: DELETE_TODO,
      payload: id,
    });
  } catch (error) {
    console.error(error);
  }
};
