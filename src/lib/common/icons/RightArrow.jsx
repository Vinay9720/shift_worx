export default function RightArrow({ width, height, fill, styles, ...rest }) {
    return (
        <svg
            width={width}
            height={height}
            style={{ ...styles }}
            viewBox='0 0 8 12'
            fill='none'
            {...rest}
            xmlns='http://www.w3.org/2000/svg'>
            <path d='M2.00009 0L0.590088 1.41L5.17009 6L0.590088 10.59L2.00009 12L8.00009 6L2.00009 0Z' fill={fill} />
        </svg>
    );
}
