import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose, bindActionCreators } from 'redux'

import * as languageService from 'services/LanguageService'
import { selectors } from 'data'
import Select from '../../components/Select'

class DropdownLanguageContainer extends Component {
  constructor (props) {
    super(props)
  }

  handleClick = selectedLanguage => {
    this.props.preferencesActions.setCulture(selectedLanguage.value)
    this.props.preferencesActions.setLanguage(selectedLanguage.language, true)
  }

  render () {
    const { currentLanguage, languages } = this.props
    const languageList = languages.map(lang => {
      return {
        text: lang.name,
        value: lang.language,
        language: lang.language
      }
    })
    console.log(languageList)

    return (
      <Select
        color="white"
        items={languageList}
        selectedValue={currentLanguage}
        callback={selectedLanguage => this.handleClick(selectedLanguage)}
      />
    )
  }
}

const mapStateToProps = state => ({
  currentLanguage: selectors.preferences.getLanguage(state),
  languages: languageService.languagesSortedByName
})

const mapDispatchToProps = dispatch => ({
  // preferencesActions: bindActionCreators(actions.preferences, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DropdownLanguageContainer)
