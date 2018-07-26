import React, { Component } from 'react';
import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

class A extends Component {
  render() {
    const {
      // login,
      data: { loading, hi }
    } = this.props;

    if (loading) {
      return <div>loading...</div>;
    }
    return <div>{hi}</div>;
  }
}

const hiQuery = gql`
  {
    hi
  }
`;

const mapStateToProps = state => ({
  login: state.me.login
});

const mapDispatchToProps = {};

export default compose(
  graphql(hiQuery),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(A);
