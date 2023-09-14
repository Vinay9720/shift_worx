export default function Check({ width, height, fill, styles, ...rest }) {
    return (
        <svg
            width={width}
            height={height}
            style={{ ...styles }}
            viewBox='0 0 24 24'
            fill='none'
            {...rest}
            xmlns='http://www.w3.org/2000/svg'>
            <path
                d='M9.99972 15.17L19.1927 5.979L20.6067 7.393L10.0007 17.999L3.63672 11.635L5.05072 10.221L10.0007 15.171L9.99972 15.17Z'
                fill={fill}
            />
        </svg>
    );
}
