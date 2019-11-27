import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosMusicalNote = props => {
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
      <path d="M716.6 96.4c-9.4 1.8-212 40.2-220.4 41.8s-16.2 7.2-16.2 16c0 0 0 515.4 0 518.8 0 3.2-0.2 14.4-4.8 23.4-6.2 11.8-17 20.4-32.2 25.4-6.6 2.2-15.6 4.2-26.2 6.6-48.2 10.8-128.8 29-128.8 103.2 0 62 44.8 90 83.4 94.8 4.2 0.6 9 1.6 14.2 1.6 0 0 0 0 0 0 13.4 0 48-2.8 78.4-22.6 22-14.2 48.2-42.8 48.2-95.6v-476.8l224-45.8v-175.6c-0.2-8.6-7.6-17.6-19.6-15.2z"></path>
    </SVG>
  )
}


IosMusicalNote.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosMusicalNote.propTypes = {
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


export default IosMusicalNote
