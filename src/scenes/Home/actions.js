// @flow
import * as type from './actionTypes';

export function setLoginStatus(status: string) {
  return {
    type: type.SET_LOGIN_STATUS,
    status
  };
}
export function formUpdateValue(name: string, value: string) {
  return {
    type: type.FORM_UPDATE_VALUE,
    name,
    value
  };
}
