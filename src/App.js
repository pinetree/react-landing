import React, { Component } from 'react'
import logo from './assets/img/logo.svg'
import './App.scss'
import { Provider } from 'react-redux'
import ConnectedIntlProvider from './providers/ConnectedIntlProvider'
import { FormattedMessage } from 'react-intl'

import AboutSection from './sections/About'

class App extends Component {
  render() {
    const { store, messages } = this.props

    return (
      <Provider store={store}>
        <ConnectedIntlProvider messages={messages}>
          <div className="App">
            <section className="page__wrapper rel">
              <AboutSection />
            </section>

            <FormattedMessage
              id="firstsсreen.maintext"
              defaultMessage="Default welcome"
            />
          </div>
        </ConnectedIntlProvider>
      </Provider>
    )
  }
}

export default App
