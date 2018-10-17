import React, { Component } from 'react';
import Switch from '@material/react-switch';

// Styles
import './header.scss';
import '@material/react-switch/dist/switch.css';

class Header extends Component {
  state = { particle: true };
  render() {
    return (
      <div className="header">
        <Switch
          className="particle-switch"
          nativeControlId="my-switch"
          checked={this.props.particleEnabled}
          onChange={this.props.onParticleToggle}
        />
        <div className="header-nav">
          <span className="header-link link">Projects</span>
        </div>
      </div>
    );
  }
}

export default Header;
