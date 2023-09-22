import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    min-height: 100vh;
    widht: 100%;
    background-position: center;
    background-size: cover;
    background-image: url('/images/login_background.jpg');
`;

export const StyledLoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 30rem;
    padding: 2rem;
    gap: 2rem;
    align-self: center;
`;

export const HeadingContainer = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const FooterContainer = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
    justify-content: center;
    word-wrap: break-word;
    font-size: 16px;
    color: #ffffff;
    cursor: pointer;
`;

export const IconContainer = styled.div`
    display: flex;
    gap: 24px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const CopyrightContainer = styled.div`
    word-wrap: break-word;
    font-size: 16px;
    color: #ffffff;
    cursor: pointer;
    text-align: center;
`;
