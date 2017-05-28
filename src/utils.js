// @flow
import { Map } from 'immutable';

import * as loginActions from './scenes/Home/actions';

const actions = [loginActions];
export const mapDispatchToProps = Map()
  .merge(...actions)
  .filter((value: any) => typeof value === 'function')
  .toObject();
