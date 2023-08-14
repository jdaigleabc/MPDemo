import * as React from "react"

function SvgComponent({ size, color }) {
    return <svg
        height={size}
        viewBox="0 0 515 515"
        width={size}
    >
        <path fill={color} d="m257.778 0c-142.137 0-257.778 115.641-257.778 257.778s115.641 257.778 257.778 257.778 257.778-115.641 257.778-257.778-115.642-257.778-257.778-257.778zm-32.222 383.899-103.338-103.338 45.564-45.564 57.774 57.774 122.218-122.218 45.564 45.564s-167.782 167.782-167.782 167.782z" />
    </svg>
}

export default SvgComponent