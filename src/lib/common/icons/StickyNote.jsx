export default function StickyNote({ width, height, fill, styles, ...rest }) {
    return (
        <svg
            width={width}
            height={height}
            style={{ ...styles }}
            viewBox='0 0 20 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            {...rest}>
            <g id='ri:sticky-note-line'>
                <path
                    id='Vector'
                    d='M17.5 12.5L12.5 17.4967L3.335 17.5C3.11457 17.5009 2.90281 17.4142 2.74624 17.2591C2.58967 17.1039 2.5011 16.8929 2.5 16.6725V3.3275C2.5 2.87083 2.87083 2.5 3.3275 2.5H16.6725C17.1292 2.5 17.5 2.88 17.5 3.335V12.5ZM15.8333 4.16667H4.16667V15.8333H10.8333V11.6667C10.8334 11.4626 10.9083 11.2656 11.0439 11.113C11.1796 10.9605 11.3665 10.863 11.5692 10.8392L11.6667 10.8333L15.8333 10.8325V4.16667ZM15.1425 12.4992L12.5 12.5V15.1408L15.1425 12.4992Z'
                    fill={fill}
                />
            </g>
        </svg>
    );
}
