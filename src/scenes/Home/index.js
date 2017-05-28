// @flow
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';
import AccountBox from 'material-ui/svg-icons/action/account-box';
import Snackbar from 'material-ui/Snackbar';

import messages from './messages';

import type { HomeStateType } from './reducer';

import { mapDispatchToProps } from '../../utils';

const styles = {
  login: {
    display: 'flex',
    justifyContent: 'center'
  },
  paper: {
    margin: 20,
    padding: 20,
    paddingTop: 0,
    textAlign: 'center',
    display: 'inline-block'
  },
  button: {
    margin: 12
  },
  header: {
    paddingTop: 10
  }
};
export type PropsType = {
  intl: any,
  fm: () => any,
  formUpdateValue: () => void,
  setLoginStatus: () => void,
  home: HomeStateType
};
export class Home extends Component {
  props: PropsType;
  render() {
    const fm = this.props.intl.formatMessage;
    return (
      <div style={styles.login}>
        <Paper style={styles.paper} zDepth={2}>
          <h3 style={styles.header}>{fm(messages.login)}</h3>
          <Divider />
          <TextField
            floatingLabelText="User Name"
            onChange={e => this.props.formUpdateValue('email', e.target.value)}
            disabled={this.props.home.get('loginStatus') === 'sending'}
          />
          <br />
          <TextField
            floatingLabelText="Password"
            type="password"
            onChange={e =>
              this.props.formUpdateValue('password', e.target.value)}
            disabled={this.props.home.get('loginStatus') === 'sending'}
          />
          <br />
          <RaisedButton
            label="Login"
            labelPosition="before"
            primary
            icon={<AccountBox />}
            style={styles.button}
            onClick={() => this.props.setLoginStatus('send')}
            disabled={this.props.home.get('loginStatus') === 'sending'}
          />
        </Paper>
        <Snackbar
          open={this.props.home.get('loginStatus') === 'logged'}
          message={`Status: ${this.props.home.get('loginStatus') === 'logged' ? 'Logged!' : 'Error!'}`}
          autoHideDuration={5000}
        />
      </div>
    );
  }
}
const mapStateToProps = (state: any) => ({ ...state });

const mapActionsToProps = (dispatch: () => {}) =>
  bindActionCreators(mapDispatchToProps, dispatch);
const injectedIntl = injectIntl(Home);
export default connect(mapStateToProps, mapActionsToProps)(injectedIntl);
