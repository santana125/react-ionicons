import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosMedicalOutline = props => {
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
      <path d="M876 375.426l-63.854-110.852-236.146 136.574v-273.148h-128v273.148l-236.146-136.574-63.876 110.852 236.206 136.574-236.188 136.574 63.856 110.852 236.148-136.574v273.148h128v-273.148l236.144 136.574 63.878-110.852-236.206-136.574 236.184-136.574zM832.352 660.25l-31.926 55.732-256.426-147.982v296h-64v-296l-256.426 148-31.938-55.57 256.456-148.394-256.448-148.314 31.928-55.718 256.428 147.996v-296h64v296l256.426-148 31.938 55.57-256.456 148.358 256.444 148.322z"></path>
    </SVG>
  )
}


IosMedicalOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosMedicalOutline.propTypes = {
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


export default IosMedicalOutline
