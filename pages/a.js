import React, { Component } from 'react';
import { connect } from 'react-redux';

class A extends Component {
  render() {
    const { login } = this.props;
    return <div>a</div>;
  }
}

const mapStateToProps = state => ({
  login: state.me.login
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(A);
