import * as React from "react"

function SvgComponent({ size, color }) {
    return <svg
        height={size}
        viewBox="0 0 512 512"
        width={size}
    >
        <path fill={color} d="M256,0C114.7,0,0,114.7,0,256s114.7,256,256,256s256-114.7,256-256S397.3,0,256,0z M205.1,383.6
		L76.7,256l36.3-36.3l92.1,91.3l193.8-193.8l36.3,36.3L205.1,383.6z"/>
    </svg>
}

export default SvgComponent