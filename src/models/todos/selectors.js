import {
  addTodoStart,
  updateTodoStart,
  fetchTodosStart,
  fetchTodosSuccess,
  fetchTodoStart
} from "./actions";

const loading = ({ todos: { loading } }) => loading;
const todos = ({ todos: { todos } }) => todos;
const todo = ({ todos: { todo } }) => todo;

const onAddTodo = dispatch => todo => dispatch(addTodoStart(todo));
const onUpdateTodo = dispatch => todo => dispatch(updateTodoStart(todo));
const onFetchTodo = dispatch => todoId => dispatch(fetchTodoStart(todoId));
const onFetchTodos = dispatch => () => dispatch(fetchTodosStart());
const onFetchTodosSuccess = dispatch => todos => {
  return dispatch(
    fetchTodosSuccess({
      payload: todos
    })
  );
};

export {
  loading,
  todos,
  todo,
  onAddTodo,
  onUpdateTodo,
  onFetchTodos,
  onFetchTodosSuccess,
  onFetchTodo
};
