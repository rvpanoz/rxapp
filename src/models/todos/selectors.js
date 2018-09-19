import { addTodo as addTodoAction, fetchTodosStart } from "./actions";

const loading = ({ todos: { loading } }) => loading;
const todos = ({ todos: { todos } }) => todos;

const addTodo = dispatch => todo => dispatch(addTodoAction(todo));
const fetchTodos = dispatch => () => dispatch(fetchTodosStart());

export { addTodo, loading, todos, fetchTodos };
