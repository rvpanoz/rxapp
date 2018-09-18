import { ofType } from "redux-observable";

import { compose } from "ramda";

import { fetchData } from "../commons/operators";

import config from "../config";

import {
  fetchTodosStart,
  fetchTodosSuccess,
  fetchTodosError,
} from "../actions";

const fetchTodosEpic = action$ =>
  action$.pipe(
    ofType(fetchTodosStart.type),
    fetchData({
      url: config.todosUrl,
      successActionCreator: compose(
        fetchTodosSuccess,
        ({ data: todos }) => ({ todos }),
      ),
      errorActionCreator: compose(
        fetchTodosError,
        error => ({ error }),
      ),
    })
  );

export default fetchTodosEpic;
