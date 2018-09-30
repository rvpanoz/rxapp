const BASE_URL = "http://localhost:3001/api";

export default {
  dateFormat: "DD/MM/YYYY",
  api: {
    todos: `${BASE_URL}/todos`,
    todo: `${BASE_URL}/todo`,
    create: `${BASE_URL}/todo/create`
  }
};
