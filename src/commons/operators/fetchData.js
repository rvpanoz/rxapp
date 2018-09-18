import { ajax } from "rxjs/ajax";
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

export default fetchData;
