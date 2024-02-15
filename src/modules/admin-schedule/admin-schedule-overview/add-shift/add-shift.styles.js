import styled from 'styled-components';

export const ModalContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-height: 1024px;
    overflow-y: auto;
    width: 784px;
    height: 83vh;
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
    justify-content: space-between;
    padding: 24px;
    ${({ theme }) => `
        border-bottom: 1px solid ${theme.borderColor.lightGray};
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
    cursor: pointer;
    justify-content: center;
`;
export const AddShiftContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`;
export const styles = {
    stack1: {
        paddingRight: '96px',
        '@media (max-width: 800px)': {
            paddingRight: '0px',
        },
    },
    timePicker: {
        width: '400px',
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
    actionButtons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: '24px',
        '@media (max-width: 800px)': {
            flexDirection: 'column-reverse',
        },
    },
    addShiftButton: {
        '@media (max-width: 980px)': {
            width: '100%',
        },
    },
};
