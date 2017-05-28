// @flow
import { fork, takeLatest, put, call, select, all } from 'redux-saga/effects';
import * as actions from '../scenes/Home/actions';
import { fetch, payload } from '../api/api';
import { HEADERS } from '../api/config';

import type { HomeActionType } from '../scenes/Home/reducer';

// workers
export function* loginUser(api: () => any): Generator<() => void, void, *> {
  yield put(actions.setLoginStatus('sending'));
  const state = yield select();
  const data = state.home.get('inputValues').toJS();
  const response = yield call(api, 'login', {
    method: 'POST',
    headers: HEADERS,
    body: payload({ ...data })
  });
  if (!response.error) {
    yield put(actions.setLoginStatus('logged'));
  } else {
    yield put(actions.setLoginStatus('error', response.message));
  }
}

// watchers
export function* watchLoginUser(
  api: () => any = fetch
): Generator<() => void, void, *> {
  yield takeLatest(
    (action: HomeActionType) =>
      action.type === 'SET_LOGIN_STATUS' && action.status === 'send',
    loginUser,
    api
  );
}

// rootSaga
function* rootSaga(): Generator<Array<() => void>, void, *> {
  yield all([fork(watchLoginUser)]);
}

export default rootSaga;
