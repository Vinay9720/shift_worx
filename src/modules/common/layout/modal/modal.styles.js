import styled from 'styled-components';
import Modal from '@mui/material/Modal';

export const StyledModalContent = styled(Modal)`
    position: absolute;
    top: 50%;
    width: 50rem;
    left: 50%;
    transform: translate(-50%, -50%);
    max-height: 600px;
    overflow-y: auto;
    box-shadow: 24;
    ${({ theme }) => `
        border-radius: ${theme.borderRadius.small};
        color: ${theme.fontColor.swxBlack};
        background-color: ${theme.backgroundColor.white};
        border: 1px solid ${theme.borderColor.lightGray};
        box-shadow: ${theme.boxShadow.grayShadow};
`}
`;
