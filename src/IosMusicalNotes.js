import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const IosMusicalNotes = props => {
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
      <path d="M812.6 96.4c-9.4 1.8-404 78.4-412.4 80s-16.2 7.2-16.2 16c0 0 0 477 0 480.2s-0.2 14.4-4.8 23.4c-6.2 11.8-17 20.4-32.2 25.4-6.6 2.2-15.6 4.2-26.2 6.6-48.2 10.8-128.8 29.2-128.8 103.6 0 62.2 44.8 90.2 83.4 95 4.2 0.6 9 1.4 14.2 1.4 0 0 0 0 0 0 13.4 0 48-2.6 78.4-22.4 22-14.4 48.2-42.8 48.2-95.6v-438l384-78c0 0 0 273.2 0 281.4s-0.4 17.8-5 26.8c-6.2 11.8-17 20.4-32.4 25.4-6.6 2.2-15.6 4.2-26.2 6.6-48.2 10.8-128.8 29-128.8 103.4 0 67.4 52.6 91.2 83.6 94.6 2.4 0.2 5.2 0.2 8.2 0.2 0 0 0 0 0 0 20.4 0 51.4-5 77.6-20 35.8-20.6 55-53.6 55-96.4v-604.2c-0.2-8.8-7.6-17.8-19.6-15.4z"></path>
    </SVG>
  )
}


IosMusicalNotes.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


IosMusicalNotes.propTypes = {
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


export default IosMusicalNotes
