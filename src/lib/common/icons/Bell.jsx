export default function Bell({ width, height, fill, styles, ...rest }) {
    return (
        <svg
            width={width}
            height={height}
            style={{ ...styles }}
            viewBox='0 0 18 18'
            fill='none'
            {...rest}
            xmlns='http://www.w3.org/2000/svg'>
            <g id='ri:notification-2-line'>
                <path
                    id='vector'
                    d='M16.5 15H1.5V13.5H2.25V8.27325C2.25 4.53225 5.2725 1.5 9 1.5C12.7275 1.5 15.75 4.53225 15.75 8.27325V13.5H16.5V15ZM3.75 13.5H14.25V8.27325C14.25 5.361 11.8995 3 9 3C6.1005 3 3.75 5.361 3.75 8.27325V13.5ZM7.125 15.75H10.875C10.875 16.2473 10.6775 16.7242 10.3258 17.0758C9.97419 17.4275 9.49728 17.625 9 17.625C8.50272 17.625 8.02581 17.4275 7.67417 17.0758C7.32254 16.7242 7.125 16.2473 7.125 15.75Z'
                    fill={fill}
                />
            </g>
            {/* <path
                d='M8 19.5C9.1 19.5 10 18.6 10 17.5H6C6 18.6 6.9 19.5 8 19.5ZM14 13.5V8.5C14 5.43 12.37 2.86 9.5 2.18V0H6.5V2.18C3.64 2.86 2 5.42 2 8.5V13.5L0 15.5V16.5H16V15.5L14 13.5ZM12 14.5H4V8.5C4 6.02 5.51 4 8 4C10.49 4 12 6.02 12 8.5V14.5Z'
                fill={fill}
            /> */}
        </svg>
    );
}
