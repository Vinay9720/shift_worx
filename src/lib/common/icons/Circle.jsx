export default function Circle({ width, height, fill, styles, cx, cy, r, stroke, ...rest }) {
    return (
        <svg
            width={width}
            height={height}
            className={styles}
            viewBox='0 0 8 8'
            fill='none'
            {...rest}
            xmlns='http://www.w3.org/2000/svg'>
            <circle
                xmlns='http://www.w3.org/2000/svg'
                id='Ellipse 234'
                cx={cx || '7'}
                cy={cy || '7'}
                r={r || '7'}
                fill={fill}
                stroke={stroke || null}
            />
            {/* <circle cx='7' cy='7' r='7' fill={fill} /> */}
        </svg>
    );
}
