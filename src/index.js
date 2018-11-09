import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import './index.css'
import configureStore from './store'
import configureLocales from './services/LocalesService'
import App from './App'
import * as serviceWorker from './serviceWorker'

const renderApp = (Component, store) => {
  const { messages } = configureLocales(store)

  const render = (Component, store, messages) => {
    ReactDOM.render(
      <AppContainer key={Math.random()} warnings={false}>
        <Component store={store} messages={messages} />
      </AppContainer>,
      document.getElementById('root')
    )
  }

  render(App, store, messages)

  if (module.hot) {
    module.hot.accept('./App.js', () =>
      render(require('./App.js').default, store, messages)
    )
  }
}

const renderError = e => {
  // eslint-disable-next-line no-console
  console.error(e)
  // ReactDOM.render(<Error />, document.getElementById('root'))
}

// =============================================================================
// ================================= APP =======================================
// =============================================================================
configureStore()
  .then(x => {
    renderApp(App, x.store)
  })
  .catch(e => {
    renderError(e)
  })

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
