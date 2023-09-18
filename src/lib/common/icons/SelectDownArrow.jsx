export default function SelectDownArrow({ width, height, fill, styles, ...rest }) {
    return (
        <svg
            width={width}
            height={height}
            style={{ ...styles }}
            viewBox='0 0 12 7'
            fill='none'
            {...rest}
            xmlns='http://www.w3.org/2000/svg'>
            <path
                d='M7.99999 8.78065L11.3 5.48065L12.2427 6.42399L7.99999 10.6667L3.75732 6.42399L4.69999 5.48132L7.99999 8.78132V8.78065Z'
                fill={fill}
            />
        </svg>
    );
}
