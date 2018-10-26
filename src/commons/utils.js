/**
 * @module Utils
 * @desc Utilities and helpers
 */
import { ajax } from 'rxjs/ajax';
import { merge } from 'ramda';

const request = params => {
  const options = merge(
    {
      method: params.method || 'GET',
      responseType: 'json',
      withCredentials: false,
    },
    params
  );

  return new Promise((resolve, reject) =>
    ajax(options).subscribe(data => resolve(data), error => reject(error))
  );
};

export { request };
