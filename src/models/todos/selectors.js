import { fetchTodosStart } from "./actions";

const loading = ({ loading }) => loading;
const todos = ({ todos }) => todos;

const fetchTodos = dispatch => () => dispatch(fetchTodosStart());

export {
  loading,
  todos,
  fetchTodos,
}
