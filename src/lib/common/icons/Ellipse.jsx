export default function Ellipse({ width, className, height, fill, styles, ...rest }) {
    return (
        <svg
            width={width}
            height={height}
            className={className}
            style={{ ...styles }}
            viewBox='0 0 36 36'
            fill='none'
            {...rest}
            xmlns='http://www.w3.org/2000/svg'>
            <circle xmlns='http://www.w3.org/2000/svg' id='Ellipse 233' cx='18' cy='18' r='18' fill={fill} />
        </svg>
    );
}
