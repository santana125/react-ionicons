import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdVolumeOff = props => {
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
      <path d="M811 512c0 45.434-9.766 88.724-27.206 127.71l63.76 63.76c31.012-56.81 48.446-122.164 48.446-191.47 0-186.512-128-344.508-298-384v89.956c124 37.308 213 155.808 213 294.044z M512 160.916l-102.042 104.96 102.042 102.038z M841.684 793.77l-659.452-659.456-48 48 180.998 180.826-16.56 20.86h-170.67v256h170.668l213.332 223.086v-303.086l189.83 189.372c-30.24 25.514-65.83 45.054-103.83 56.672v89.956c62-14.344 117.992-44.326 164.63-85.618l79.22 79.386 48-48.086-48.004-48.078-0.162 0.166z M704.376 512c0-76.798-42.376-144.814-106.376-177.726v119.64l101.602 101.602c3.108-14.038 4.774-28.608 4.774-43.516z"></path>
    </SVG>
  )
}


MdVolumeOff.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdVolumeOff.propTypes = {
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


export default MdVolumeOff
