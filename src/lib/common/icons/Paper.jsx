export default function Paper({ width, height, fill, styles, ...rest }) {
    return (
        <svg
            width={width}
            height={height}
            style={{ ...styles }}
            viewBox='0 0 15 15'
            fill='none'
            {...rest}
            xmlns='http://www.w3.org/2000/svg'>
            <path
                d='M15.5 10.5L10.5 15.4967L1.335 15.5C1.11457 15.5009 0.902807 15.4142 0.746238 15.2591C0.589669 15.1039 0.501103 14.8929 0.5 14.6725V1.3275C0.5 0.870833 0.870833 0.5 1.3275 0.5H14.6725C15.1292 0.5 15.5 0.88 15.5 1.335V10.5ZM13.8333 2.16667H2.16667V13.8333H8.83333V9.66667C8.83336 9.46256 8.9083 9.26555 9.04393 9.11302C9.17956 8.96049 9.36646 8.86305 9.56917 8.83917L9.66667 8.83333L13.8333 8.8325V2.16667ZM13.1425 10.4992L10.5 10.5V13.1408L13.1425 10.4992Z'
                fill={fill}
            />
        </svg>
    );
}
