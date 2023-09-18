export default function List({ width, height, fill, styles, ...rest }) {
    return (
        <svg
            width={width}
            height={height}
            style={{ ...styles }}
            viewBox='0 0 16 16'
            fill='none'
            {...rest}
            xmlns='http://www.w3.org/2000/svg'>
            <path
                d='M5.33333 2.66659H14V3.99992H5.33333V2.66659ZM2 2.33325H4V4.33325H2V2.33325ZM2 6.99992H4V8.99992H2V6.99992ZM2 11.6666H4V13.6666H2V11.6666ZM5.33333 7.33325H14V8.66658H5.33333V7.33325ZM5.33333 11.9999H14V13.3333H5.33333V11.9999Z'
                fill={fill}
            />
        </svg>
    );
}
