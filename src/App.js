import React, { Component } from 'react';
import Header from './components/header';
import Particles from 'react-particles-js';

import './App.scss';

class App extends Component {
  state = {
    particle: true,
    particleStyle: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      'z-index': -1
    },
    particleParams: {
      particles: {
        number: {
          value: 75,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: ['#f38181', '#fce38a', '#eaffd0', '#95e1d3']
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#000000'
          },
          polygon: {
            nb_sides: 5
          }
        },
        opacity: {
          value: 0.4,
          random: false,
          anim: {
            enable: false,
            speed: 10,
            opacity_min: 1,
            sync: false
          }
        },
        size: {
          value: 5,
          random: true,
          anim: {
            enable: false,
            speed: 20,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: true,
          // distance: 300,
          distance: 100,
          color: '#000000',
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 2,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: false,
            mode: 'repulse'
          },
          onclick: {
            enable: false,
            mode: 'push'
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 800,
            line_linked: {
              opacity: 1
            }
          },
          bubble: {
            distance: 800,
            size: 80,
            duration: 2,
            opacity: 0.8,
            speed: 3
          },
          repulse: {
            distance: 100,
            duration: 0.4
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      retina_detect: true
    }
  };

  handleParticleToggle = () => {
    const particle = !this.state.particle;
    this.setState({ particle });
  };

  render() {
    return (
      <div className={this.getAppClass()}>
        {this.renderParticles()}

        <Header
          particleEnabled={this.state.particle}
          onParticleToggle={this.handleParticleToggle}
        />
      </div>
    );
  }

  getAppClass() {
    if (this.state.particle) return 'app';
    else return 'app-dark';
  }

  renderParticles() {
    if (this.state.particle)
      return (
        <Particles
          style={this.state.particleStyle}
          params={this.state.particleParams}
        />
      );
  }
}

export default App;
