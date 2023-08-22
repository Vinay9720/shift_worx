export default function LastPageArrow({ width, height, fill, styles, ...rest }) {
    return (
        <svg
            width={width}
            height={height}
            className={styles}
            viewBox='0 0 13 12'
            fill='none'
            {...rest}
            xmlns='http://www.w3.org/2000/svg'>
            <path
                d='M0.589966 1.41L5.17997 6L0.589966 10.59L1.99997 12L7.99997 6L1.99997 0L0.589966 1.41ZM11 0H13V12H11V0Z'
                fill={fill}
            />
        </svg>
    );
}
