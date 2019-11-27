import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosShareAltOutline = props => {
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
      <path d="M896 496l-320-304v170.6c-298.6 42.8-405.4 256-448 469.4 106.6-149.4 234.6-217.6 448-217.6v175l320-293.4zM297.8 638.4c-37 18.4-70.4 41.2-102.4 69.4 22.2-60.4 50.6-111.4 85.4-154.2 33.8-41.6 74.4-75.8 120.8-101.6 51.4-28.6 111.6-48 179-57.6l27.4-2.4v-128l241 231.6-241 224.4v-136l-32-2c-111.2 0-202.2 18.6-278.2 56.4z"></path>
    </SVG>
  )
}


IosShareAltOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosShareAltOutline.propTypes = {
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


export default IosShareAltOutline
