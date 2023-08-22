export default function Check({ width, height, fill, styles, ...rest }) {
    return (
        <svg
            width={width}
            height={height}
            className={styles}
            viewBox='0 0 16 16'
            fill='none'
            {...rest}
            xmlns='http://www.w3.org/2000/svg'>
            <path
                d='M6.6668 10.1134L12.7955 3.98608L13.7381 4.92875L6.66747 11.9994L2.4248 7.75675L3.36747 6.81408L6.66747 10.1141L6.6668 10.1134Z'
                fill={fill}
            />
        </svg>
    );
}
