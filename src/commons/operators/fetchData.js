import { ajax } from "rxjs/ajax";
// import { pipe } from "rxjs/operators";
import { map, switchMap, catchError } from "rxjs/operators";

const noop = () => {};

const fetchData = ({
  url,
  successActionCreator = noop,
  errorActionCreator = noop,
}) => action$ =>
  action$.pipe(
    switchMap(() => ajax.getJSON(url)),
    map(successActionCreator),
    catchError(errorActionCreator),
  );

// for the course:
// the code bellow is equivelant with the code above
// ... explain in class
// 
// const fetchData = ({
//   url,
//   successActionCreator = noop,
//   errorActionCreator = noop,
// }) => pipe(
//   switchMap(() => ajax.getJSON(url)),
//   map(successActionCreator),
//   catchError(errorActionCreator),
// );

export default fetchData;
