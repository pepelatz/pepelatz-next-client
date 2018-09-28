import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Header.scss';
import { toggleAuthPopup } from '../libs/actions';

class Header extends Component {
  render() {
    /* eslint-disable no-shadow */
    const { toggleAuthPopup } = this.props;
    /* eslint-enable */

    return (
      <header className="header">
        <div className="container">
          <h1 className="logo">ПЕПЕЛАЦ</h1>

          <ul className="menu">
            <li>
              <span role="presentation" onClick={() => toggleAuthPopup()}>
                Войти
              </span>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => ({}); // eslint-disable-line

const mapDispachToProps = {
  toggleAuthPopup
};

export default connect(
  mapStateToProps,
  mapDispachToProps
)(Header);
