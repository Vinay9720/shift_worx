export default function Circle({ width, height, fill, styles, ...rest }) {
    return (
        <svg
            width={width}
            height={height}
            className={styles}
            viewBox='0 0 14 14'
            fill='none'
            {...rest}
            xmlns='http://www.w3.org/2000/svg'>
            <circle cx='7' cy='7' r='7' fill={fill} />
        </svg>
    );
}
