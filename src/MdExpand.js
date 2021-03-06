import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdExpand = props => {
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
      <path d="M793.59 793.6h-153.59v102.4h256v-256h-102.41z M793.6 230.41v153.59h102.4v-256h-256v102.41z M230.41 230.4h153.59v-102.4h-256v256h102.41z M230.4 793.59v-153.59h-102.4v256h256v-102.41z"></path>
    </SVG>
  )
}


MdExpand.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdExpand.propTypes = {
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


export default MdExpand
