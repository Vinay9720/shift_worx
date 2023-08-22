export default function SelectDownArrow({ width, height, fill, styles, ...rest }) {
    return (
        <svg
            width={width}
            height={height}
            className={styles}
            viewBox='0 0 12 7'
            fill='none'
            {...rest}
            xmlns='http://www.w3.org/2000/svg'>
            <path
                d='M10.922 1L5.961 6L1 1'
                stroke='#C1C3C5'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                fill={fill}
            />
        </svg>
    );
}
