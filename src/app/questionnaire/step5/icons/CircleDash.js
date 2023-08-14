import * as React from "react"

function SvgComponent({ size, color }) {
    return <svg
        height={size}
        viewBox="0 0 16 16"
        width={size}
    >
        <path fill={color} d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
        <path fill={color} d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
    </svg>
}

export default SvgComponent