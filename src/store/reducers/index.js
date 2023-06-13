/* Day la noi gom chung cac reducers rieng le cua comp */
import { combineReducers } from "redux";
import todoReducer from "./todoReducer";

const rootReducer = combineReducers({
  myTodos: todoReducer,
});

export default rootReducer;
