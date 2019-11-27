import React from 'react'
import PropTypes from 'prop-types'

import SVG from './SVG'

const MdGitCommit = props => {
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
      <path d="M960 448h-199.6c-28.4-110.4-128.4-192-247.4-192s-219 81.6-247.4 192h-201.6v128h201.6c28.4 110.4 128.4 192 247.4 192s219-81.6 247.4-192h199.6v-128zM513 672c-88 0-159.6-71.8-159.6-160s71.6-160 159.6-160c88 0 159.6 71.8 159.6 160s-71.6 160-159.6 160z"></path>
    </SVG>
  )
}


MdGitCommit.defaultProps = {
  // style
  style: {},
  color: '#000000',
  fontSize: '22px',

  // animation
  shake: false,
  beat: false,
  rotate: false,
}


MdGitCommit.propTypes = {
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


export default MdGitCommit
