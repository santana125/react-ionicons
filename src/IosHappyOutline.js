import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosHappyOutline = props => {
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
      <path d="M512 128c51.8 0 102.2 10.2 149.4 30.2 45.8 19.4 86.8 47 122 82.4 35.2 35.2 63 76.4 82.4 122 20 47.4 30.2 97.6 30.2 149.4s-10.2 102.2-30.2 149.4c-19.4 45.8-47 86.8-82.4 122-35.2 35.2-76.4 63-122 82.4-47.4 20-97.6 30.2-149.4 30.2s-102.2-10.2-149.4-30.2c-45.8-19.4-86.8-47-122-82.4-35.2-35.2-63-76.4-82.4-122-20-47.2-30.2-97.6-30.2-149.4s10.2-102.2 30.2-149.4c19.4-45.8 47-86.8 82.4-122 35.2-35.2 76.4-63 122-82.4 47.2-20 97.6-30.2 149.4-30.2zM512 96c-229.8 0-416 186.2-416 416s186.2 416 416 416 416-186.2 416-416-186.2-416-416-416v0z M704 448c0 26.51-21.49 48-48 48s-48-21.49-48-48c0-26.51 21.49-48 48-48s48 21.49 48 48z M416 448c0 26.51-21.49 48-48 48s-48-21.49-48-48c0-26.51 21.49-48 48-48s48 21.49 48 48z M512 738c96.6 0 177-70 193-162h-386c16 92 96.4 162 193 162z"></path>
    </SVG>
  )
}


IosHappyOutline.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosHappyOutline.propTypes = {
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


export default IosHappyOutline
