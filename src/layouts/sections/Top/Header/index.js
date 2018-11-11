import React, { Component } from 'react'
import logo from 'assets/img/logo.svg'
import Nav from 'layouts/Nav'
import DropdownLanguage from 'layouts/DropdownLanguage'

class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      fixed: false
    }
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleOnScroll)
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleOnScroll)
  }

  handleOnScroll = () => {
    if (window.scrollY > 70 && !this.state.fixed) this.setState({ fixed: true })

    if (window.scrollY <= 70 && this.state.fixed)
      this.setState({ fixed: false })
  }

  render () {
    return (
      <header className={`header ${this.state.fixed ? 'noTrans' : ''}`}>
        <div className="row align-justify w1140">
          <div className="header__mob-show-menu">
            <button className="hamburger hamburger--slider">
              <span className="hamburger-box">
                <span className="hamburger-inner" />
              </span>
            </button>
          </div>
          <a className="logo" href="/">
            <img
              src={logo}
              className="logo-vect"
              width="53"
              height="54"
              alt=""
            />
            <span className="logo__wrap">
              <span className="logo__title">oasis </span>
              <span className="logo__mini-title">eth distribution fund</span>
            </span>
          </a>
          <Nav type="nav-top" className="flex" />

          <div className="language-drop flex">
            <span className="language-drop__text">language</span>
            <DropdownLanguage />
            <div className="language-drop__wrap">
              <div className="language-drop__current">
                <img src="assets/img/general/uk.png" alt="" />
              </div>
              <div className="language-drop__down">
                <a href="rus.html" className="language-drop__choose">
                  <img src="assets/img/general/rus.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
