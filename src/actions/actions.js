import { Action } from 'commons/actions';

const ActionCreator = Action('//TODO_APP');

const addTodo = ActionCreator('ADD_TODO');
const fetchTodosStart = ActionCreator('FETCH_TODOS_START');
const fetchTodosError = ActionCreator('FETCH_TODOS_ERROR');
const fetchTodosSuccess = ActionCreator('FETCH_TODOS_SUCCESS');
const todosFiltered = ActionCreator('TODOS_FILTERED');

export {
  addTodo,
  fetchTodosStart,
  fetchTodosError,
  fetchTodosSuccess,
  todosFiltered,
}
