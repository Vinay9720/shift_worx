export default function Filter({ width, height, fill, styles, ...rest }) {
    return (
        <svg
            width={width}
            height={height}
            className={styles}
            viewBox='0 0 21 16'
            fill='none'
            {...rest}
            xmlns='http://www.w3.org/2000/svg'>
            <path d='M7 12H11V10H7V12ZM0 0V2H18V0H0ZM3 7H15V5H3V7Z' fill={fill} />
        </svg>
    );
}
