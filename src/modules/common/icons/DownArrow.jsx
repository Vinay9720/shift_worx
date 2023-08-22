export default function DownArrow({ width, height, fill, styles, ...rest }) {
    return (
        <svg
            width={width}
            height={height}
            className={styles}
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 10 13'
            fill='none'
            {...rest}>
            <path
                d='M9.08325 8.24967L8.26075 7.42717L5.58325 10.0988L5.58325 0.66634L4.41659 0.666339L4.41659 10.0988L1.73909 7.42134L0.916585 8.24967L4.99992 12.333L9.08325 8.24967Z'
                fill={fill}
            />
        </svg>
    );
}
