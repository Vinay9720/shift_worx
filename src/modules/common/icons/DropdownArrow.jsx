import React from 'react';

function DropdownArrow(props) {
    return (
        <div onClick={props.onClick} >
            {!props.open ? (
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width={props.width || '14'}
                    height={props.height || '14'}
                    style={...props.styles}
                    viewBox='0 0 24 24'
                    fill={props.fill || 'none'}
                    stroke={props.stroke || 'currentColor'}
                    strokeWidth={props.strokeWidth || '2'}
                    strokeLinecap='round'
                    strokeLinejoin='round'>
                    <path d={'M22 12l-10 9-10-9'} />
                </svg>
            ) : (
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width={props.width || '14'}
                    height={props.height || '14'}
                    style={props.styles}
                    viewBox='0 0 24 24'
                    fill={props.fill || 'none'}
                    stroke={props.stroke || 'currentColor'}
                    strokeWidth={props.strokeWidth || '2'}
                    strokeLinecap='round'
                    strokeLinejoin='round'>
                    <path d='M2 12l10 -9 10 9' />
                </svg>
            )}
        </div>
    );
}
export default DropdownArrow;
