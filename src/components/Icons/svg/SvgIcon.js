// SvgIcon.js
import React from 'react'
import PropTypes from 'prop-types'
const SvgIcon = ({ iconName, size, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height="100%"
      color={color}
      fill="currentcolor"
      viewBox="0 0 128 128"
      preserveAspectRatio="xMidYMid meet"
      x="0"
      y="0"
    >
      <path d={iconName} fill="currentcolor" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  )
}
SvgIcon.defaultProps = {
  size: 24,
  color: 'inherit',
}
SvgIcon.propTypes = {
  /** The name of const in icon-paths.js */
  iconName: PropTypes.string.isRequired,
  /** The size to act as the width of the icon */
  size: PropTypes.number,
  /** The fill color of the path */
  color: PropTypes.string,
}
export default SvgIcon