

export default function CircleHeart({ size, color = "#757575", heartColor = "#fff" }) {
    return <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 64 64`}
        enableBackground="new 0 0 64 64"
        width={size}
        height={size}
    >
        <circle fill={heartColor} cx="32" cy="32" r="30" />
        <path fill={color} d="m32 2c-16.568 0-30 13.432-30 30 0 16.568 13.432 30 30 30s30-13.432 30-30c0-16.568-13.432-30-30-30m0 48c-1.371-1.814-20.53-12.883-16.602-25.218 3.53-11.073 15.094-6.597 16.602-.594 1.094-5.635 12.949-10.694 16.604.584 3.925 12.136-15.237 23.785-16.604 25.228" />
    </svg>
}