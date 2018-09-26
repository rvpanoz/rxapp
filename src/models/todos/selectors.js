import { addTodoStart, fetchTodosStart } from "./actions";

const loading = ({ todos: { loading } }) => loading;
const todos = ({ todos: { todos } }) => todos;

const addTodo = dispatch => todo => dispatch(addTodoStart(todo));
const fetchTodos = dispatch => () => dispatch(fetchTodosStart());

export { loading, todos, addTodo, fetchTodos };
