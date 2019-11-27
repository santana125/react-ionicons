import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosTrendingUp = props => {
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
      <path d="M944 256h-224c-8.8 0-16 7.2-16 16s7.2 16 16 16h184l-328.8 328.8-167.8-168c-3-3-7-4.6-11.4-4.6-4.2 0-8.4 1.6-11.4 4.6l-316.4 316.4c-3.2 3.2-4.2 7.4-4.2 11.8 0 4.2 1.2 7.8 4.2 11 3.2 3.2 7.2 4.6 11.4 4.6 4 0 8.2-1.6 11.4-4.6l305-305.4 167.8 168c6.2 6.2 16.4 6.2 22.6 0l341.6-338.6v184c0 8.8 7.2 16 16 16s16-7.2 16-16v-224c0-8.8-7.2-16-16-16z"></path>
    </SVG>
  )
}


IosTrendingUp.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosTrendingUp.propTypes = {
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


export default IosTrendingUp
