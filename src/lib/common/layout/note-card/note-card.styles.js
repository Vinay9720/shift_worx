import styled from 'styled-components';

export const NoteWrapper = styled.div`
    border-radius: 8px;
    border: 1px solid rgba(31, 111, 169, 0.24);
    padding: 16px 0px;
    width: 100%;
    ${({ theme, isRead }) => `
        background: ${isRead ? theme.backgroundColor.white : theme.backgroundColor.lightestBlue};
    `}
`;

export const NoteContainer = styled.div`
    padding: 0px 18px;
    display: flex;
    gap: 40px;
    ${({ theme, isRead }) =>
        !isRead &&
        `
            border-radius: 5px;
            border-left: 5px solid ${theme.backgroundColor.blue};
    `}
    @media (max-width: 800px) {
        flex-direction: column;
    }
`;

export const NoteLeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 40%;
    @media (max-width: 800px) {
        width: 100%;
    }
`;

export const DescriptionContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;
export const styles = {
    horizontal: {
        display: 'none',
        '@media(max-width:800px)': {
            display: 'block',
        },
    },
    vertical: {
        display: 'block',
        '@media(max-width:800px)': {
            display: 'none',
        },
    },
};
