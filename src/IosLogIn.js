import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosLogIn = props => {
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
      <path d="M274 160h572c44.2 0 80 35.8 80 80v544c0 44.2-35.8 80-80 80h-572c-44.2 0-80-35.8-80-80 0-8.8 7.2-16 16-16s16 7.2 16 16c0 26.4 21.6 48 48 48h572c26.4 0 48-21.6 48-48v-544c0-26.4-21.6-48-48-48h-572c-26.4 0-48 21.6-48 48 0 8.8-7.2 16-16 16s-16-7.2-16-16c0-44.2 35.8-80 80-80z M632.6 493.4l-169.2-168.8c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l151.2 148.8h-478c-8.8 0-16 7.2-16 16s7.2 16 16 16h478l-147.4 148.8c-6.2 6.2-6.2 16.4 0 22.6 3.2 3 7.2 4.6 11.4 4.6s8.2-1.4 11.4-4.6l165.2-164.8c12.6-12.6 12.6-28.8 0-41.2z"></path>
    </SVG>
  )
}


IosLogIn.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosLogIn.propTypes = {
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


export default IosLogIn
