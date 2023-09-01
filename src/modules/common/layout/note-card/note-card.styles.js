import styled from 'styled-components';

export const NoteWrapper = styled.div`
    border-radius: 8px;
    border: 1px solid rgba(31, 111, 169, 0.24);
    background: #fffff;
    width: 100%;
`;

export const NoteContainer = styled.div`
    padding: 16px 18px;
    display: flex;
    gap: 40px;
`;

export const NoteLeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 40%;
`;
