import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdRestaurant = props => {
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
      <path d="M329.704 559.878l123.668-120.502-305.932-295.964c-67.252 65.528-67.252 173.354 0 238.88l182.264 177.586z M624.778 483.76c67.272 29.604 160.566 8.464 227.82-59.186 82.444-80.33 99.818-196.606 34.726-257.92-62.93-63.42-182.262-46.49-264.708 33.842-69.436 67.65-91.132 158.552-60.748 221.972-95.478 95.136-423.104 414.346-423.104 414.346l60.754 59.186 299.42-291.732 299.416 291.732 60.748-59.186-299.418-291.738 65.094-61.316z"></path>
    </SVG>
  )
}


MdRestaurant.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdRestaurant.propTypes = {
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


export default MdRestaurant
