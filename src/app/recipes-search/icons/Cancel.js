import * as React from "react"

function SvgComponent({ size, color }) {
    return <svg
        height={size}
        viewBox="0 0 48 48"
        width={size}
    >
        <path fill={color} d="M24 6C14.1 6 6 14.1 6 24s8.1 18 18 18 18-8.1 18-18S33.9 6 24 6zm0 4c3.1 0 6 1.1 8.4 2.8L12.8 32.4C11.1 30 10 27.1 10 24c0-7.7 6.3-14 14-14zm0 28c-3.1 0-6-1.1-8.4-2.8l19.6-19.6C36.9 18 38 20.9 38 24c0 7.7-6.3 14-14 14z" />
    </svg>
}

export default SvgComponent