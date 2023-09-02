export default function ActivityStatus({ width, height, fill, styles, ...rest }) {
    return (
        <svg
            width={width}
            height={height}
            style={{ ...styles }}
            viewBox='0 0 10 10'
            fill='none'
            {...rest}
            xmlns='http://www.w3.org/2000/svg'>
            <path
                d='M5 10C7.76142 10 10 7.76142 10 5C10 2.23858 7.76142 0 5 0C2.23858 0 0 2.23858 0 5C0 7.76142 2.23858 10 5 10Z'
                fill={fill}
            />
        </svg>
    );
}
