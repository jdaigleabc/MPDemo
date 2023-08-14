import * as React from "react"

function SvgComponent({ size, color }) {
    return <svg
        height={size}
        viewBox="0 0 512 512"
        width={size}
    >
        <g>
            <g>
                <path fill={color} d="M496.916,365.439c-20.112-20.112-52.837-20.112-72.951,0c-0.541,0.542-1.07,1.094-1.585,1.658l-71.433-71.434
			c1.831-8.732,2.621-18.394,2.34-28.971c-0.631-23.795-6.539-51.484-17.558-82.296c-19.231-53.774-53.075-111.745-82.303-140.972
			c-57.898-57.898-152.104-57.898-210.001,0c-57.898,57.897-57.898,152.103,0,210.001c29.228,29.228,87.198,63.073,140.972,82.303
			c30.812,11.019,58.501,16.927,82.296,17.558c1.402,0.037,2.784,0.056,4.154,0.056c8.968,0,17.233-0.817,24.808-2.405
			l71.443,71.442c-0.563,0.515-1.116,1.044-1.658,1.585c-20.112,20.112-20.112,52.839,0,72.952
			c10.056,10.056,23.266,15.084,36.475,15.084c13.21,0,26.42-5.028,36.476-15.084c11.968-11.968,16.934-28.28,14.657-43.867
			c15.586,2.277,31.899-2.688,43.868-14.658C517.028,418.278,517.028,385.552,496.916,365.439z M191.266,316.518
			c-51.234-18.322-106.096-50.2-133.416-77.52c-24.193-24.193-37.518-56.36-37.518-90.574c0-34.214,13.324-66.38,37.518-90.573
			s56.36-37.518,90.574-37.518c34.214,0,66.38,13.325,90.574,37.518c27.32,27.32,59.198,82.183,77.52,133.416
			c21.401,59.843,21.873,105.967,1.295,126.545C297.234,338.392,251.109,337.919,191.266,316.518z M482.49,423.964
			c-11.447,11.447-29.463,12.3-41.908,1.986c-4.056-3.361-10-3.083-13.724,0.641l-0.267,0.267c-3.723,3.723-4.001,9.67-0.641,13.724
			c10.314,12.444,9.459,30.461-1.986,41.908c-12.158,12.158-31.941,12.158-44.098,0c-12.158-12.158-12.158-31.941,0-44.098
			c2.269-2.27,4.854-4.165,7.683-5.635c2.885-1.499,4.883-4.283,5.379-7.497c0.496-3.213-0.569-6.471-2.869-8.77L317,343.43
			c5.728-3.039,10.815-6.768,15.238-11.192c4.423-4.423,8.143-9.521,11.181-15.249l73.07,73.07c2.298,2.298,5.555,3.362,8.77,2.869
			c3.213-0.496,5.997-2.494,7.497-5.379c1.47-2.83,3.365-5.415,5.635-7.683c12.158-12.158,31.941-12.157,44.098,0
			C494.647,392.024,494.647,411.807,482.49,423.964z"/>
            </g>
        </g>
        <g>
            <g>
                <path fill={color} d="M105.489,228.831c-7.279-5.28-13.378-10.364-18.125-15.111c-3.983-3.984-10.443-3.984-14.426,0s-3.984,10.443,0,14.426
			c5.505,5.505,12.426,11.291,20.573,17.199c1.81,1.313,3.905,1.944,5.981,1.944c3.157,0,6.271-1.461,8.266-4.212
			C111.064,238.517,110.049,232.138,105.489,228.831z"/>
            </g>
        </g>
        <g>
            <g>
                <path fill={color} d="M87.364,71.782c-3.984-3.984-10.443-3.984-14.427,0c-31.75,31.75-41.159,79.068-23.973,120.55
			c1.627,3.928,5.425,6.299,9.428,6.299c1.301,0,2.624-0.251,3.901-0.779c5.206-2.156,7.676-8.124,5.52-13.329
			c-14.016-33.83-6.342-72.42,19.551-98.314C91.348,82.226,91.348,75.766,87.364,71.782z"/>
            </g>
        </g>
    </svg>
}

export default SvgComponent