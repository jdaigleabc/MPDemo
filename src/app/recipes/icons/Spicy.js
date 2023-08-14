

export default function SpicySvg({ size, color = "#aaaaaa" }) {
    return <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 534 534`}
        width={size}
        height={size}
    >
       <path fill={color} d="M430.095,366.991c-32.803-42.283-33.434-90.521-16.298-133.116c-36.315,35.569-56.763,79.548-42.484,123.955
	c1.812,5.648,2.974,11.181,3.824,16.83l0.325,6.812l-2.026,0.746l-8.623-19.706c-12.252-33.538-14.058-68.899-2.025-105.215
	c23.96-71.133-7.344-140.785-64.426-196.795c26.304,67.724,23.856,144.726-29.388,212.884c-10.227,12.993-18.636,26.2-25.343,39.719
	l-4.052,8.941l0.324-2.338c10.753-45.789-12.674-87.326-51.652-118.63c20.232,40.569,23.323,88.71-6.071,134.499
	c-24.603,47.277-30.888,105.962-11.609,149.519c30.141,62.938,70.185,91.903,124.604,93.391c7.876,0.104,15.973-0.208,24.283-1.278
	c44.407-4.792,99.891-26.506,117.779-77.944C454.911,455.162,463.326,410.003,430.095,366.991z"/>
    </svg>
}