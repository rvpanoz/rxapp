import { Action } from "commons/actions";

const ActionCreator = Action("//TODO_APP");

const addTodoStart = ActionCreator("ADD_TODO_START");
const addTodoSuccess = ActionCreator("ADD_TODO_SUCCESS");
const addTodoError = ActionCreator("ADD_TODO_ERROR");
const fetchTodoStart = ActionCreator("FETCH_TODO_START");
const fetchTodosStart = ActionCreator("FETCH_TODOS_START");
const fetchTodosError = ActionCreator("FETCH_TODOS_ERROR");
const fetchTodosSuccess = ActionCreator("FETCH_TODOS_SUCCESS");

export {
  addTodoStart,
  addTodoSuccess,
  addTodoError,
  fetchTodoStart,
  fetchTodosStart,
  fetchTodosError,
  fetchTodosSuccess
};
