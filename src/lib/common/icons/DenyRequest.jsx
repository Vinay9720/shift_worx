export default function DenyRequest({ width, height, fill, styles, ...rest }) {
    return (
        <svg
            width={width}
            height={height}
            style={{ ...styles }}
            viewBox='0 0 26 26'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            {...rest}>
            <g xmlns='http://www.w3.org/2000/svg' id='Group'>
                <path
                    id='Vector'
                    d='M17 9L13 13M13 13L9 17M13 13L9 9M13 13L17 17'
                    stroke='#F43C02'
                    strokeWidth='5.12787'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                />
                <path
                    id='Vector_2'
                    d='M13 23C18.5228 23 23 18.5228 23 13C23 7.47715 18.5228 3 13 3C7.47715 3 3 7.47715 3 13C3 18.5228 7.47715 23 13 23Z'
                    stroke='#F43C02'
                    strokeWidth='5.12787'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                />
            </g>
        </svg>
    );
}
