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

/** cach viet nhanh, ham tra ve 1 ham */
export const markCompleted = (id) => (dispatch) => {
  dispatch({
    type: "MARK_COMPLETED",
    payload: id,
  });
};

/* using shift+alt + a  */

/*  ham add-todo */
export const addTodo = (todo) => (dispatch) => {
  dispatch({
    type: "ADD_TODO",
    payload: todo,
  });
};

/* ham deleteTodo */
export const deleteTodo = (id) => (dispatch) => {
  dispatch({
    type: "DELETE_TODO",
    payload: id,
  });
};
