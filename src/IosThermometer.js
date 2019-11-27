import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosThermometer = props => {
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
      <path d="M606 600.6v-443.6c0-51.4-42-93-94-93s-94 41.6-94 93v443.8c-58 33-98 95.6-98 167.2 0 106 85.8 192 191.8 192s192.2-86 192.2-192c0-72-40-134.6-98-167.4zM512.4 896c-70.6 0-128-57.2-128-128 0-59.6 39.6-109.8 95.6-124v-356c0-17.6 14.4-32 32-32s32 14.4 32 32v356c54 14.2 96.2 64.4 96.2 124 0 70.6-57.2 128-127.8 128z M607.6 768.4c0 53.019-42.981 96-96 96s-96-42.981-96-96c0-53.019 42.981-96 96-96s96 42.981 96 96z"></path>
    </SVG>
  )
}


IosThermometer.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosThermometer.propTypes = {
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


export default IosThermometer
