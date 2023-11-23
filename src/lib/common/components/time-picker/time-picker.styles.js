import { TimeField } from '@mui/x-date-pickers';
import { Select } from '@mui/material';
import styled from 'styled-components';

export const StyledTimeField = styled(TimeField)`
    & .MuiOutlinedInput-input {
        padding: 17px 14px;
        font-family: __Manrope_36d688;
        ${({ theme }) => `
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

export const StyledAMPMSelect = styled(Select)`
    & .MuiOutlinedInput-input {
        padding-right: 0 !important;
    }
    & .MuiOutlinedInput-input {
        font-family: __Manrope_36d688;
        ${({ theme, padding }) => `
            padding: ${padding || '17px 16px'};
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
            border: none;
            // box-shadow: ${theme.boxShadow.blueShadow} !important;
        `}
    }
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
`;
export const styles = {
    iconStyles: {
        marginRight: '18',
        marginLeft: '8',
        cursor: 'pointer',
    },
};
