import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosAperture = props => {
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
      <path d="M493.8 480l-19.8 34.2 17.2 29.8h40.8l18.2-31.2-19-32.8z M512 96c-229.8 0-416 186.2-416 416s186.2 416 416 416 416-186.2 416-416-186.2-416-416-416zM509.8 576l164.2 284.2c-4.2 2-8.2 3.8-12.4 5.6-5.8 2.4-11.6 4.8-17.4 6.8l-188.4-326.4-162.4 281.4c-8.8-6.2-17.4-12.6-25.6-19.4l189.4-328h-327.8c0.8-10.8 2.2-21.4 4-32h379.4l-163.8-284c4.4-2.2 9-4.2 13.6-6 5.4-2.2 10.8-4.4 16.2-6.4l190 329 163.6-283.4c8.8 6.2 17.4 12.8 25.6 19.6l-189 327h325.6c-0.8 10.8-2.2 21.4-4 32h-380.8z"></path>
    </SVG>
  )
}


IosAperture.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosAperture.propTypes = {
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


export default IosAperture
