import React, { Component } from 'react'
import './App.scss'
import { Provider } from 'react-redux'
import ConnectedIntlProvider from './providers/ConnectedIntlProvider'

import Nav from './layouts/Nav'
import TopSection from './layouts/sections/Top'
import HowSection from './layouts/sections/How'
import MissionSection from './layouts/sections/Mission'
import ConditionsSection from './layouts/sections/Conditions'
import PlaceWithdrawSection from './layouts/sections/PlaceWithdraw'
import ContactsSection from './layouts/sections/Contacts'

class App extends Component {
  render () {
    const { store, messages } = this.props

    return (
      <Provider store={store}>
        <ConnectedIntlProvider messages={messages}>
          <div className="App">
            <section className="page__wrapper rel">
              <div className="layer-mob pc-hide" />
              <div className="pc-hide aside-menu-mob">
                <Nav type="nav-mob" />
              </div>
              <TopSection />
              <HowSection />
              <MissionSection />
              <ConditionsSection />
              <PlaceWithdrawSection />
              <ContactsSection />
            </section>
          </div>
        </ConnectedIntlProvider>
      </Provider>
    )
  }
}

export default App
