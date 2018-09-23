import { ajax } from "rxjs/ajax";
import { map, switchMap, catchError, throwError } from "rxjs/operators";

const noop = () => {};

const callServer = opts => $action => {
  let crossDomain = opts && !!opts.crossDomain;
  let options = {
    url: opts.url,
    crossDomain,
    method: opts.method || "GET",
    body: opts.params || {},
    responseType: "json"
  };

  let ajaxOpts = opts.headers
    ? Object.assign({}, options, {
        headers: opts.headers
      })
    : Object.assign({}, options);

  return $action.pipe(
    switchMap(() => ajax(ajaxOpts)),
    map(opts.successActionCreator || noop),
    catchError(opts.errorActionCreator || noop)
  );
};

export default callServer;
