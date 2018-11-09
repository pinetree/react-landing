import React, { Component } from 'react'
import logo from './assets/img/logo.svg'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="page__wrapper rel">
          <div className="layer-mob pc-hide" />
          <div className="pc-hide aside-menu-mob">
            <nav className="nav-mob">
              <a className="nav-mob__link" href="#about">
                About us{' '}
              </a>
              <a className="nav-mob__link" href="#miss">
                Mission{' '}
              </a>
              <a className="nav-mob__link" href="#partner">
                Partners{' '}
              </a>
              <a className="nav-mob__link" href="#faq">
                FAQ
              </a>
            </nav>
          </div>
          <img src={logo} alt="" />
        </section>
      </div>
    )
  }
}

export default App
