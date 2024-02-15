import { TimePicker } from '@mui/x-date-pickers';
import styled from 'styled-components';

export const StyledTimeField = styled(TimePicker)`
    width: 100%;
    & .MuiOutlinedInput-input {
        font-family: var(--font-Manrope) !important;
        ${({ theme, padding }) => `
            padding:${padding || '17px 14px'} ;
            color: ${theme.fontColor.swxSlightlyBlack};
        `}
    }
    & .MuiOutlinedInput-notchedOutline {
        border-radius: 8px;
        border: none;
    }
    &:hover .MuiOutlinedInput-notchedOutline {
        border: none;
    }
    &.Mui-focused .MuiOutlinedInput-notchedOutline {
        ${({ theme }) => `
        border: 1px solid ${theme.borderColor.lightGray} !important;
        // box-shadow: ${theme.boxShadow.blueShadow} !important;
    `}
    }
`;

export const StyledTimePickerOverlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    cursor: pointer;
`;

export const StyledWrapper = styled.div`
    height: 55px;
    border-left: 1px solid ${({ theme }) => theme.borderColor.lightGray};
`;
export const StyledContainerwrapper = styled.div`
    display: flex;
    align-items: end;
    height: 56px;
    border-radius: ${({ theme }) => theme.borderRadius.small};
    border: 1px solid ${({ theme }) => theme.borderColor.lightGray};
    position: relative;
`;
