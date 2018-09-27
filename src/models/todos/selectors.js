import { addTodoStart, fetchTodosStart, fetchTodosSuccess } from "./actions";

const loading = ({ todos: { loading } }) => loading;
const todos = ({ todos: { todos } }) => todos;

const onAddTodo = dispatch => todo => dispatch(addTodoStart(todo));
const onFetchTodos = dispatch => () => dispatch(fetchTodosStart());
const onFetchTodosSuccess = dispatch => todos => {
  debugger;
  return dispatch(
    fetchTodosSuccess({
      payload: todos
    })
  );
};

export { loading, todos, onAddTodo, onFetchTodos, onFetchTodosSuccess };
