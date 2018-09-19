import { fetchTodosStart } from "./actions";

const loading = ({ todos: { loading } }) => loading;
const todos = ({ todos: { todos } }) => todos;

const fetchTodos = dispatch => () => dispatch(fetchTodosStart());

export { loading, todos, fetchTodos };
