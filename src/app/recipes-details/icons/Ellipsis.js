import * as React from "react"

function SvgComponent({ size, color }) {
    return <svg
        height={size}
        viewBox="-192 0 512 512"
        width={size}
    >
        <path fill={color} d="m128 256c0 35.347656-28.652344 64-64 64s-64-28.652344-64-64 28.652344-64 64-64 64 28.652344 64 64zm0 0" />
        <path fill={color} d="m128 64c0 35.347656-28.652344 64-64 64s-64-28.652344-64-64 28.652344-64 64-64 64 28.652344 64 64zm0 0" />
        <path fill={color} d="m128 448c0 35.347656-28.652344 64-64 64s-64-28.652344-64-64 28.652344-64 64-64 64 28.652344 64 64zm0 0" />
    </svg>
}

export default SvgComponent