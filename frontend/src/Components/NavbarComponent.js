import React, {Component} from 'react';
import NavbarView from './NavbarView';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AuthAction from '../Store/AuthAction';

class NavbarComponent extends Component {
  render() {
    if(this.props.auth){
      return(<NavbarView currentAuth={this.props.auth} logoff={this.props.authFn.logoff}/>);
    }
    else{
      return(<NavbarView currentAuth={this.props.auth}/>);
    }
  }
}

NavbarComponent.propTypes = {
  currentAuth: PropTypes.bool, // redux managed state.auth
  authUpdate: PropTypes.func   // dispatch function to update state.auth
};

const mapStateToProps = (state) => { return {auth: state.authReducer.auth} }
const mapDispatchToProps = (dispatch) => { return { authFn: AuthAction(dispatch) } }

export default connect(mapStateToProps, mapDispatchToProps)(NavbarComponent)



