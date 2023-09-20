import styled from 'styled-components';
import { Autocomplete } from '@mui/material';
import { Icon } from '@/modules/common/icons';

export const StyledAutoCompleteSelect = styled(Autocomplete)`
    input {
        ${({ padding }) => `
            padding: ${padding || '17px 16px'} !important;
        `}
    }
    & .MuiOutlinedInput-input {
        ${({ theme, padding }) => `
            color: ${theme.fontColor.swxSlightlyBlack};
            padding: ${padding || '17px 16px'};
        `}
    }
    & .MuiOutlinedInput-notchedOutline {
        border-radius: 8px;
        ${({ theme }) => `
            border: 1px solid ${theme.borderColor.lightGray};
        `}
    }
    &:hover .MuiOutlinedInput-notchedOutline {
        ${({ theme }) => `
            border: 1px solid ${theme.borderColor.lightGray} !important;
        `}
    }
    &.Mui-focused .MuiOutlinedInput-notchedOutline {
        ${({ theme }) => `
            border: 1px solid ${theme.borderColor.lightGray} !important;
            // box-shadow: ${theme.boxShadow.blueShadow} !important;
        `}
    }
`;

export const DropdownIcon = <Icon name='dropdown-arrow' width='14' styles={{ margin: '4px 8px 4px 8px' }} />;
