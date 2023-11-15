export default function Radio({ width, height, fill, styles, ...rest }) {
    return (
        <svg
            width={width}
            height={height}
            style={{ ...styles }}
            viewBox='0 0 20 20'
            fill='none'
            {...rest}
            xmlns='http://www.w3.org/2000/svg'>
            <rect x='1' y='1' width='18' height='18' rx='9' stroke='#838A91' strokeWidth='2' />
            <circle cx='10' cy='10' r='5' fill='#838A91' />
        </svg>
    );
}
