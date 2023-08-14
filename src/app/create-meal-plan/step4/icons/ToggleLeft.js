import * as React from "react"

function SvgComponent({ size, color }) {
    return <svg
        height={size}
        viewBox="0 0 32 32"
        width={size}
    >
        <path fill={color} d="M29,8H3c-1.7,0-3,1.3-3,3v10c0,1.7,1.3,3,3,3h26c1.7,0,3-1.3,3-3V11C32,9.3,30.7,8,29,8z M18.8,17.4c0.4,0.4,0.4,1,0,1.4
	c-0.2,0.2-0.5,0.3-0.7,0.3s-0.5-0.1-0.7-0.3L16,17.4l-1.4,1.4c-0.2,0.2-0.5,0.3-0.7,0.3s-0.5-0.1-0.7-0.3c-0.4-0.4-0.4-1,0-1.4
	l1.4-1.4l-1.4-1.4c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l1.4,1.4l1.4-1.4c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4L17.4,16L18.8,17.4z"/>
    </svg>
}

export default SvgComponent