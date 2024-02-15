import styled from 'styled-components';

export const WidgetCardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-auto-flow: column;
    gap: 1rem;
    margin-top: ;
    @media (max-width: 767px) {
        display: flex;
        flex-direction: column;
    }
`;

export const ModalContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 700px;
    max-height: 80vh;
    overflow-y: auto;
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
    margin-top: 24px;
`;

export const StepsContainer = styled.div`
    display: flex;
    gap: 20px;
`;

export const StyledStep = styled.div`
    display: flex;
    gap: 10px;
    padding: 1px 0px;
    align-items: center;
    cursor: pointer;
`;

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 16px 16px 27px 32px;
    ${({ theme }) => `        
        border-bottom: 2px solid ${theme.borderColor.blue};
  `}
    height: 90px;
`;

export const BodyContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const FooterContainer = styled.div`
    display: flex;
    gap: 24px;
    padding: 0px 24px 24px 24px;
    margin-top: 38px;
    justify-content: end;
    @media (max-width: 800px) {
        flex-direction: column-reverse;
    }
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
export const StyledWrapperContainer = styled.div`
    padding: 31px 32px 30px 32px;
    ${({ theme }) => `        
        border-bottom: 2px solid ${theme.borderColor.lightGray};
  `}
    @media (max-width: 800px) {
        padding: 32px;
    }
`;
export const styles = {
    stack1: {
        '@media (max-width: 800px)': {
            paddingRight: '0px',
        },
    },
    timePicker: {
        width: '100%',
        '@media (max-width: 800px)': {
            width: '100%',
        },
    },
    timePickerStackStyles: {
        display: 'flex',
        flexDirection: 'row',
        gap: '25px',
        '@media (max-width: 800px)': {
            display: 'flex',
            flexDirection: 'column',
        },
    },
    datePickerStackStyles: {
        display: 'flex',
        flexDirection: 'row',
        gap: '25px',
        '@media (max-width: 800px)': {
            display: 'flex',
            flexDirection: 'column',
        },
    },
    addRequestButton: {
        '@media (max-width: 980px)': {
            width: '100%',
        },
    },
};
