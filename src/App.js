import React, { Component } from 'react'
import logo from './assets/img/logo.svg'
import './App.css'
import { Provider } from 'react-redux'
import ConnectedIntlProvider from './providers/ConnectedIntlProvider'
import { FormattedMessage } from 'react-intl'

class App extends Component {
  render() {
    const { store, messages } = this.props

    return (
      <Provider store={store}>
        <ConnectedIntlProvider messages={messages}>
          <div className="App">
            <FormattedMessage
              id="firstsсreen.maintext"
              defaultMessage="Default welcome"
            />
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
        </ConnectedIntlProvider>
      </Provider>
    )
  }
}

export default App
