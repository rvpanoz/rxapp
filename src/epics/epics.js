import { Observable, throwError, of } from "rxjs";
import { ajax } from "rxjs/ajax";

import { map, switchMap, catchError } from "rxjs/operators";

import config from "../config";

import {
  fetchTodosStart,
  fetchTodosError,
  fetchTodosSuccess,
} from "../actions";

const fetchTodosEpic = (action$, state$) =>
  action$.ofType(fetchTodosStart.type).pipe(
    switchMap(() => ajax.getJSON(config.todosUrl)),
    map(({ data: todos}) => fetchTodosSuccess({ todos })),
    catchError(error => fetchTodosError({ error })),
  );

export default fetchTodosEpic;
