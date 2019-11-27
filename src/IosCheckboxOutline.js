import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosCheckboxOutline = props => {
  return (
    <SVG
      style={props.style}
      className={props.className}
      fill={props.color}
      width={props.fontSize}
      height={props.fontSize}
      viewBox="0 0 1024 1024"
      onClick={props.onClick}
      rotate={props.rotate ? 1 : 0}
      shake={props.shake ? 1 : 0}
      beat={props.beat ? 1 : 0}
    >
      <path d="M432 714c0.8 0 0.8-0.2 0-0.4-0.8 0.2-1 0.4 0 0.4z M680.2 354.6l-249.6 251.4-94.4-94.4-35.8 35.6 130.2 130 284.6-286.4z M864 160v704h-704v-704h704zM896 128h-768v768h768v-768z"></path>
    </SVG>
  )
}


IosCheckboxOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosCheckboxOutline.propTypes = {
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


export default IosCheckboxOutline
