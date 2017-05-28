import 'whatwg-fetch';
import { MAIN_URL } from '../api/config';

export function payload(data: any) {
  const json = JSON.stringify(data, null, 2);
  return json;
}

export function fetch(url: string, opts: any) {
  return window.fetch(`${MAIN_URL}${url}`, opts).then(response => {
    return response.json();
  });
}
