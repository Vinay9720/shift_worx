export default function Addition({ width, height, fill, styles, ...rest }) {
    return (
        <svg
            width={width}
            height={height}
            style={{ ...styles }}
            viewBox='0 0 14 15'
            fill='none'
            {...rest}
            xmlns='http://www.w3.org/2000/svg'>
            <path d='M6 6.5V0.5H8V6.5H14V8.5H8V14.5H6V8.5H0V6.5H6Z' fill={fill} />
        </svg>
    );
}
