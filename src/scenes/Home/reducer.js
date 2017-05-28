// @flow
import { Map } from 'immutable';
import * as type from './actionTypes';

export const INITIAL_STATE = Map({
  inputValidates: Map({}),
  loginStatus: 'notLogged'
});

export type HomeStateType = Map<
  string,
  {
    inputValues: Map<string, {}>
  }
>;

export type HomeActionType = {
  name: string,
  type: string,
  value?: string,
  status: boolean
};

const homeReducer = (
  state: HomeStateType = INITIAL_STATE,
  action: HomeActionType
) => {
  switch (action.type) {
    case type.SET_LOGIN_STATUS:
      return state.set('loginStatus', action.status);
    case type.FORM_UPDATE_VALUE:
      return state.setIn(['inputValues', action.name], action.value);
    default:
      return state;
  }
};

export default homeReducer;
