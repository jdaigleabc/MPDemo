import * as React from "react"

function SvgComponent({ size, color }) {
    return <svg
        height={size}
        viewBox="0 0 32 32"
        width={size}
    >
        <path fill={color} d="M29,8H3c-1.7,0-3,1.3-3,3v10c0,1.7,1.3,3,3,3h26c1.7,0,3-1.3,3-3V11C32,9.3,30.7,8,29,8z M20.7,14.7l-4,4
	C16.5,18.9,16.3,19,16,19s-0.5-0.1-0.7-0.3l-3-3c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l2.3,2.3l3.3-3.3c0.4-0.4,1-0.4,1.4,0
	S21.1,14.3,20.7,14.7z"/>
    </svg>
}

export default SvgComponent