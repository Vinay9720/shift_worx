export default function LeftArrow({ width, height, fill, styles, ...rest }) {
    return (
        <svg
            width={width}
            height={height}
            style={{ ...styles }}
            viewBox='0 0 8 12'
            fill='none'
            {...rest}
            xmlns='http://www.w3.org/2000/svg'>
            <path d='M7.41 1.41L6 0L0 6L6 12L7.41 10.59L2.83 6L7.41 1.41Z' fill={fill} />
        </svg>
    );
}
