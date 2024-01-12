import styled from 'styled-components';

export const ModalContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-height: 696px;
    overflow-y: auto;
    width: 548px;
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
    height: 76px;
    display: flex;
    justify-content: space-between;
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
export const CloseContainer = styled.div`
    height: 30px;
    width: 30px;
`;
export const EllipseContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    justify-content: center;
`;
export const styles = {
    addNoteButton: {
        '@media (max-width: 980px)': {
            width: '100%',
        },
    },
};
