export default function FileClose({ width, height, fill, styles, ...rest }) {
    return (
        <svg
            width={width}
            height={height}
            style={{ ...styles }}
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            {...rest}>
            <g xmlns='http://www.w3.org/2000/svg' id='ri:file-close-fill'>
                <path
                    id='Vector'
                    d='M18 13C19.093 13 20.117 13.292 21 13.803V7L16 2H3.998C3.86733 1.99961 3.73787 2.02496 3.617 2.0746C3.49613 2.12423 3.38622 2.19719 3.29355 2.28931C3.20088 2.38143 3.12725 2.49089 3.07689 2.61146C3.02652 2.73203 3.00039 2.86134 3 2.992V21.008C3.00209 21.2706 3.10742 21.5219 3.29322 21.7075C3.47902 21.8931 3.73038 21.9982 3.993 22H12.803C12.2764 21.0878 11.9991 20.0531 11.9992 18.9998C11.9992 17.9465 12.2765 16.9118 12.8032 15.9996C13.3299 15.0875 14.0875 14.3301 14.9997 13.8035C15.9119 13.277 16.9467 12.9999 18 13ZM21.536 21.121L19.414 19L21.536 16.879L20.121 15.464L18.001 17.586L15.879 15.464L14.465 16.879L16.585 18.999L14.465 21.121L15.879 22.535L18 20.415L20.121 22.535L21.536 21.121Z'
                    fill='#1F6FA9'
                />
            </g>
        </svg>
    );
}
