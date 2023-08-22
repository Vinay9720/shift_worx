export default function HeaderCalender({ width, height, fill, styles, ...rest }) {
    return (
        <svg
            width={width}
            height={height}
            className={styles}
            viewBox='0 0 18 18'
            fill='none'
            {...rest}
            xmlns='http://www.w3.org/2000/svg'>
            <path
                d='M5.205 1.5C5.517 1.5 5.76975 1.743 5.76975 2.043V3.138C6.27075 3.129 6.8325 3.129 7.46475 3.129H10.476C11.1075 3.129 11.6692 3.129 12.1702 3.13875V2.04375C12.1702 1.74375 12.423 1.5 12.735 1.5C13.047 1.5 13.2997 1.743 13.2997 2.043V3.1875C14.3835 3.27075 15.0953 3.4755 15.6173 3.97875C16.1407 4.48125 16.3538 5.16525 16.44 6.20775L16.5 6.75H1.5V6.207C1.587 5.1645 1.8 4.4805 2.32275 3.978C2.8455 3.4755 3.5565 3.27 4.64025 3.18675V2.043C4.64025 1.743 4.893 1.5 5.205 1.5Z'
                fill='white'
            />
            <path
                opacity='0.5'
                d='M16.5 10.5V9C16.5 8.37075 16.497 7.24875 16.4872 6.75H1.50748C1.49773 7.24875 1.49998 8.37075 1.49998 9V10.5C1.49998 13.3282 1.49998 14.7427 2.37898 15.621C3.25723 16.5 4.67098 16.5 7.49998 16.5H10.5C13.3275 16.5 14.742 16.5 15.621 15.621C16.5 14.7427 16.5 13.3282 16.5 10.5Z'
                fill='white'
            />
            <path
                d='M13.5 12.75C13.5 12.9489 13.421 13.1397 13.2803 13.2803C13.1397 13.421 12.9489 13.5 12.75 13.5C12.5511 13.5 12.3603 13.421 12.2197 13.2803C12.079 13.1397 12 12.9489 12 12.75C12 12.5511 12.079 12.3603 12.2197 12.2197C12.3603 12.079 12.5511 12 12.75 12C12.9489 12 13.1397 12.079 13.2803 12.2197C13.421 12.3603 13.5 12.5511 13.5 12.75ZM13.5 9.75C13.5 9.94891 13.421 10.1397 13.2803 10.2803C13.1397 10.421 12.9489 10.5 12.75 10.5C12.5511 10.5 12.3603 10.421 12.2197 10.2803C12.079 10.1397 12 9.94891 12 9.75C12 9.55109 12.079 9.36032 12.2197 9.21967C12.3603 9.07902 12.5511 9 12.75 9C12.9489 9 13.1397 9.07902 13.2803 9.21967C13.421 9.36032 13.5 9.55109 13.5 9.75ZM9.75 12.75C9.75 12.9489 9.67098 13.1397 9.53033 13.2803C9.38968 13.421 9.19891 13.5 9 13.5C8.80109 13.5 8.61032 13.421 8.46967 13.2803C8.32902 13.1397 8.25 12.9489 8.25 12.75C8.25 12.5511 8.32902 12.3603 8.46967 12.2197C8.61032 12.079 8.80109 12 9 12C9.19891 12 9.38968 12.079 9.53033 12.2197C9.67098 12.3603 9.75 12.5511 9.75 12.75ZM9.75 9.75C9.75 9.94891 9.67098 10.1397 9.53033 10.2803C9.38968 10.421 9.19891 10.5 9 10.5C8.80109 10.5 8.61032 10.421 8.46967 10.2803C8.32902 10.1397 8.25 9.94891 8.25 9.75C8.25 9.55109 8.32902 9.36032 8.46967 9.21967C8.61032 9.07902 8.80109 9 9 9C9.19891 9 9.38968 9.07902 9.53033 9.21967C9.67098 9.36032 9.75 9.55109 9.75 9.75ZM6 12.75C6 12.9489 5.92098 13.1397 5.78033 13.2803C5.63968 13.421 5.44891 13.5 5.25 13.5C5.05109 13.5 4.86032 13.421 4.71967 13.2803C4.57902 13.1397 4.5 12.9489 4.5 12.75C4.5 12.5511 4.57902 12.3603 4.71967 12.2197C4.86032 12.079 5.05109 12 5.25 12C5.44891 12 5.63968 12.079 5.78033 12.2197C5.92098 12.3603 6 12.5511 6 12.75ZM6 9.75C6 9.94891 5.92098 10.1397 5.78033 10.2803C5.63968 10.421 5.44891 10.5 5.25 10.5C5.05109 10.5 4.86032 10.421 4.71967 10.2803C4.57902 10.1397 4.5 9.94891 4.5 9.75C4.5 9.55109 4.57902 9.36032 4.71967 9.21967C4.86032 9.07902 5.05109 9 5.25 9C5.44891 9 5.63968 9.07902 5.78033 9.21967C5.92098 9.36032 6 9.55109 6 9.75Z'
                fill='white'
            />
        </svg>
    );
}
