import {
  addTodo,
  fetchTodosStart,
  fetchTodosError,
  fetchTodosSuccess,
  todosFiltered,
} from './actions';

export {
  addTodo,
  fetchTodosStart,
  fetchTodosError,
  fetchTodosSuccess,
  todosFiltered,
};

// import {
//   ADD_TODO,
//   FETCH_TODOS_START,
//   FETCH_TODOS_ERROR,
//   FETCH_TODOS_SUCCESS
// } from "./types";
//
// export const fetchTodosSuccess = action => ({
//   type: FETCH_TODOS_SUCCESS,
//   loading: false,
//   todos: action.todos
// });
//
// export const fetchTodos = action => ({
//   type: FETCH_TODOS_START,
//   loading: true
// });
