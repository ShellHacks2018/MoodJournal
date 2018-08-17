import React, {Component} from 'react';
import NavbarView from './NavbarView';
import PropTypes from 'prop-types';

export default class NavbarComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      redirect: false
    }
  }

  logoff = () => {
    localStorage.clear();
    this.props.authUpdate(false);
    this.setState({redirect: true}); // Not passed, just used to force re-render
  }

  render() {
    if(this.props.currentAuth){
      return(<NavbarView currentAuth={true} logoff={this.logoff}/>);
    }
    else{
      return(<NavbarView currentAuth={false}/>);
    }
  
  }
}

NavbarComponent.propTypes = {
  currentAuth: PropTypes.bool,
  authUpdate: PropTypes.func
};

