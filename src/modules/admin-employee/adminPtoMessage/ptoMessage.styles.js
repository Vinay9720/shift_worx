import styled from 'styled-components';

export const ModalContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-height: 696px;
    overflow-y: auto;
    width: 648px;
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

export const StyledTitle = styled.h1`
    ${({ theme }) => `
        color: ${theme.fontColor.swxSlightlyBlack};
        font-size: ${theme.fontSize.large};
        font-weight: ${theme.fontWeight.bold};
        font-style: normal;
        height: 34px;
  `}
`;

export const StyledBorderContainer = styled.div`
    ${({ theme }) => `
        border: 1px solid ${theme.borderColor.lightGray};
        border-radius: ${theme.borderRadius.small};
    `}
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

export const BodyContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const FooterContainer = styled.div`
    display: flex;
    gap: 24px;
    padding: 0px 24px 24px 24px;
    margin-top: 62px;
    justify-content: end;
`;

export const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
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
    cursor: pointer;
    margin-top: -15px;
`;
