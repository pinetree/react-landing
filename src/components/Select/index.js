import React, { Component } from 'react'
import PropTypes from 'prop-types'
import onClickOutside from 'react-onclickoutside'

import Dropdown from './template'
import { keysIn } from 'ramda'

class Select extends Component {
  constructor (props) {
    super(props)

    this.state = {
      toggled: props.opened,
      selectedItem:
        props.items.filter(item => item.value === props.selectedValue)[0] ||
        props.items[0]
    }
  }

  handleClick = () => {
    this.setState({ toggled: !this.state.toggled })
  }

  handleClickOutside = () => {
    this.setState({ toggled: false })
  }

  handleCallback = item => {
    this.setState({ toggled: false, selectedItem: item })
    if (this.props.callback) {
      this.props.callback(item)
    }
  }

  render () {
    const { ...rest } = this.props

    return (
      <Dropdown
        {...rest}
        handleClick={this.handleClick}
        handleCallback={this.handleCallback}
        toggled={this.state.toggled}
        selectedItem={this.state.selectedItem}
      />
    )
  }
}

Select.defaultProps = {
  color: 'brand-secondary',
  opened: false,
  selectedValue: 0,
  uppercase: true,
  down: false
}

Select.propTypes = {
  selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })
  ),
  callback: PropTypes.func.isRequired,
  opened: PropTypes.bool,
  color: '#000',
  uppercase: PropTypes.bool,
  down: PropTypes.bool
}

export default onClickOutside(Select)
