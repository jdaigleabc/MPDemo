import * as React from "react"

function SvgComponent({ size, color }) {
    return <svg
        height={size}
        viewBox="0 0 231 231"
        width={size}
    >
        <g>
            <rect fill={color} width="230" x="0.5" y="198" height="33" />
            <rect fill={color} width="131" x="99.5" y="133" height="33" />
            <rect fill={color} width="131" x="99.5" y="66" height="33" />
            <rect fill={color} width="230" x="0.5" height="33" />
            <polygon fill={color} points="33.5,149 82.5,116 33.5,83 33.5,100 0.5,100 0.5,133 33.5,133  " />
        </g>
    </svg>
}

export default SvgComponent