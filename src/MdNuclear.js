import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdNuclear = props => {
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
      <path d="M672 544c0-59.6-32.6-111.4-80.8-139l146.2-248.2c-66.2-38.6-143.2-60.8-225.4-60.8-82.4 0-159.8 22.4-226.2 61.2l143.2 250c-46.2 28-77 78.8-77 136.8h-288c0 166.6 93.8 306.8 228.8 384l140.2-244.8c23.4 13.2 50.2 20.8 79 20.8 28.6 0 55.4-7.6 78.6-20.6l140.6 244.6c135-77.2 228.8-217.4 228.8-384h-288z"></path>
    </SVG>
  )
}


MdNuclear.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdNuclear.propTypes = {
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


export default MdNuclear
