import * as React from "react"

function SvgComponent({ size, color }) {
    return <svg
        width={size}
        height={size}
        viewBox="0 0 20 20"
    >
        <path d="M16.993 6.667H3.227l6.883 6.883 6.883-6.883z" fill={color} />
    </svg>
}

export default SvgComponent