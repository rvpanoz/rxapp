/**
 * @module Utils
 * @desc Utilities and helpers
 */
import { ajax } from "rxjs/ajax";
import { merge } from "ramda";
import { map, switchMap, catchError, throwError } from "rxjs/operators";

const request = params => {
  const options = merge(
    {
      method: params.method || "GET",
      responseType: "json",
      withCredentials: false
    },
    params
  );

  return new Promise((resolve, reject) =>
    ajax(options).subscribe(data => resolve(data), error => reject(error))
  );
};

const noop = () => {};

const callServer = opts => $action => {
  const crossDomain = opts && !!opts.crossDomain;
  const options = merge(
    {
      url: opts.url,
      crossDomain,
      method: opts.method || "GET",
      body: opts.params || {}
    },
    {
      responseType: "json"
    }
  );

  return $action.pipe(
    switchMap(() => ajax(options)),
    map(opts.successActionCreator || noop),
    catchError(opts.errorActionCreator || noop)
  );
};

export { request, callServer };
