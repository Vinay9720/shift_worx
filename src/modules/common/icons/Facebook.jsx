export default function Facebook({ width, height, fill, styles, ...rest }) {
    return (
        <svg
            width={width}
            height={height}
            className={styles}
            viewBox='0 0 17 33'
            fill='none'
            {...rest}
            xmlns='http://www.w3.org/2000/svg'>
            <path
                d='M16.5771 5.90395V0.707144C16.5771 0.707144 11.2488 0.641357 10.887 0.641357C8.48596 0.641357 4.99944 3.37132 4.99944 6.49599C4.99944 9.98245 4.99944 12.0875 4.99944 12.0875H0V18.0079H4.93368V32.6774H10.7554V17.9421H15.9193L16.5771 12.1533H10.8541C10.8541 12.1533 10.8541 8.60102 10.8541 7.9103C10.8541 6.89068 11.6106 5.90395 12.7618 5.90395C13.5183 5.87106 16.5771 5.90395 16.5771 5.90395Z'
                fill={fill}
            />
        </svg>
    );
}
