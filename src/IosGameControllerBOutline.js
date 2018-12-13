import React, { Component } from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

class IosGameControllerBOutline extends Component {

  constructor(props) {
    super(props)
    this.state = {classNames: [], animationActive: false}
    this._getClasses = this._getClasses.bind(this)
  }

  render() {
    const style = {
      ...this.props.style,
      color: this.props.color,
      fontSize: this.props.fontSize,
    }

    return (
      <SVG
        style={this.props.style}
        className={this._getClasses()}
        fill={this.props.color}
        width={this.props.fontSize}
        height={this.props.fontSize}
        viewBox="0 0 1024 1024"
        onClick={this.props.onClick}
        rotate={this.props.rotate ? 1 : 0}
        shake={this.props.shake ? 1 : 0}
        beat={this.props.beat ? 1 : 0}
      >
        <path d="M616.152 407.858c-22.116 0-40.152 18.028-40.152 40.208 0 22.178 18.038 40.214 40.152 40.214 22.262 0 40.296-18.038 40.296-40.214 0.002-22.182-18.034-40.208-40.296-40.208z M703.976 495.756c-22.116 0-40.106 17.898-40.106 40.212 0 22.128 17.99 40.032 40.106 40.032 22.292 0 40.296-17.902 40.296-40.032 0.002-22.314-18.004-40.212-40.296-40.212z M270.468 368.734c-43.28 0-78.468 35.606-78.468 79.286 0 43.73 35.188 79.246 78.468 79.246 43.31 0 78.498-35.516 78.498-79.246 0-43.68-35.186-79.286-78.498-79.286zM270.246 486.914c-21.376 0-38.686-17.442-38.686-38.894 0-21.45 17.31-38.882 38.686-38.882 21.282 0 38.594 17.434 38.594 38.882 0 21.452-17.312 38.894-38.594 38.894z M703.976 320c-22.116 0-40.106 18.028-40.106 40.214 0 22.18 17.99 40.166 40.106 40.166 22.292 0 40.296-17.986 40.296-40.166 0.002-22.186-18.004-40.214-40.296-40.214z M791.894 407.858c-22.21 0-40.202 18.028-40.202 40.208 0 22.178 17.99 40.214 40.202 40.214 22.118 0 40.106-18.038 40.106-40.214 0-22.182-17.988-40.208-40.106-40.208z M932.558 497.732c-42.314-176.942-87.262-270.978-176.908-297.66-19.53-5.802-36.154-8.072-51.498-8.072-55.196 0-93.876 29.366-192.16 29.366-98.348 0-137.004-29.362-192.124-29.366-15.33 0-31.926 2.27-51.442 8.072-89.738 26.682-134.684 120.718-176.922 297.66-42.362 176.946-34.668 304.726 15.358 328.578 8.142 3.89 16.462 5.69 24.908 5.69 43.388 0 90.278-47.676 135.318-104.094 51.308-64.21 64.228-65.906 220.556-65.906h48.686c156.294 0 169.256 1.692 220.564 65.906 45.052 56.414 91.94 104.008 135.33 104.008 8.452 0 16.768-1.758 24.914-5.646 50.010-23.852 57.704-151.59 15.42-328.536zM903.354 797.432c-3.67 1.752-7.208 2.568-11.128 2.568-12.044 0-28.154-8.098-46.59-23.416-18.362-15.26-38.614-37.018-63.74-68.478-25.918-32.44-47.334-56.458-87.056-67.898-33.294-9.586-77.248-10.208-158.508-10.208h-48.686c-81.266 0-125.222 0.622-158.518 10.21-39.706 11.438-61.12 35.37-87.046 67.816-25.112 31.454-45.36 53.254-63.724 68.516-18.432 15.316-34.54 23.436-46.586 23.436-3.864 0-7.502-0.83-11.136-2.564-19.112-9.114-45.144-95.346 1.996-292.258 42.774-179.182 84.762-253.554 154.918-274.414 15.266-4.54 29.108-6.744 42.318-6.744 19.484 0 37.198 4.634 59.624 10.498 32.14 8.406 72.144 18.87 132.504 18.87 60.296 0 100.292-10.456 132.43-18.858 22.458-5.872 40.2-10.508 59.73-10.508 13.236 0 27.102 2.208 42.37 6.742 70.074 20.856 112.060 95.234 154.912 274.428 47.050 196.912 21.022 283.15 1.916 292.262z"></path>
      </SVG>
    )
  }

  _getClasses() {
    return [...this.state.classNames, this.props.className].join(' ')
  }

  _getPathByIconName() {
    let icon = icons.find(icon => icon.tags[0] === this.props.icon)
    if (icon) return icon.paths.join(' ')
    return ''
  }

}


IosGameControllerBOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosGameControllerBOutline.propTypes = {
  // style
  style: PropTypes.object,
  color: PropTypes.string,
  fontSize: PropTypes.string,

  // animation
  shake: PropTypes.bool,
  beat: PropTypes.bool,
  rotate: PropTypes.bool,

  // functions
  onClick: PropTypes.func
}


export default IosGameControllerBOutline