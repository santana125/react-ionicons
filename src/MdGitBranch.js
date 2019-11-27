import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdGitBranch = props => {
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
      <path d="M832 320c0-70.6-57.4-128-128-128s-128 57.4-128 128c0 47.4 25.8 88.6 64 110.8v17.2c0 39.8-15.6 67.4-50.6 89.8-30.8 19.6-76.2 34.2-135 43-28 4.2-51.4 12-70.4 21.4v-299.4c38.2-22.2 64-63.4 64-110.8 0-70.6-57.4-128-128-128s-128 57.4-128 128c0 47.4 25.8 88.6 64 110.8v418.4c-38.2 22.2-64 63.4-64 110.8 0 70.6 57.4 128 128 128s128-57.4 128-128c0-33.2-12.6-63.4-33.4-86.2 3.8-9.8 19.4-32.6 58.8-38.6 77.6-11.6 137.8-31.8 184.6-61.6 72-45.6 110-114 110-197.6v-17.2c38.2-22.2 64-63.4 64-110.8zM320 112c44.2 0 80 35.8 80 80s-35.8 80-80 80-80-35.8-80-80 35.8-80 80-80zM320 912c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80zM704 400c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z"></path>
    </SVG>
  )
}


MdGitBranch.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdGitBranch.propTypes = {
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


export default MdGitBranch
