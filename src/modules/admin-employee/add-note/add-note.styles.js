import styled from 'styled-components';

export const ModalContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-height: 600px;
    overflow-y: auto;
    width: 600px;
    box-shadow: 24;
    ${({ theme }) => `
        border-radius: ${theme.borderRadius.small};
        color: ${theme.fontColor.swxBlack};
        background-color: ${theme.backgroundColor.white};
        border: 1px solid ${theme.borderColor.lightGray};
        box-shadow: ${theme.boxShadow.grayShadow};
    `}

    @media (max-width: 800px) {
        width: 90%;
        padding: 20px;
        box-sizing: border-box;
        max-height: 80vh;
    }
`;

export const HeaderContainer = styled.div`
    display: flex;
    padding: 24px;
    ${({ theme }) => `
        border-bottom: 1px solid ${theme.borderColor.lightGray};
    `}
`;

export const StyledBorderContainer = styled.div`
    ${({ theme }) => `
        border: 1px solid ${theme.borderColor.lightGray};
        border-radius: ${theme.borderRadius.small};
    `}
`;
