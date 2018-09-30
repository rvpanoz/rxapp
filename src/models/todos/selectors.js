import {
  addTodoStart,
  fetchTodosStart,
  fetchTodosSuccess,
  fetchTodoStart
} from "./actions";

const loading = ({ todos: { loading } }) => loading;
const todos = ({ todos: { todos } }) => todos;

const onAddTodo = dispatch => todo => dispatch(addTodoStart(todo));
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
  onAddTodo,
  onFetchTodos,
  onFetchTodosSuccess,
  onFetchTodo
};
