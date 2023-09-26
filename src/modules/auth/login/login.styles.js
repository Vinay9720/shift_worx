import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    min-height: 100vh;
    width: 100%;
    background-position: center;
    background-size: cover;
    background-image: url('/images/login_background.jpg');
`;

export const StyledLoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 30rem;
    padding: 2rem;
    align-self: center;
`;

export const HeadingContainer = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 32px;
`;

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;
    justify-content: center;
    word-wrap: break-word;
    font-size: 16px;
    color: #ffffff;
    cursor: pointer;
    margin-top: 24px;
`;

export const IconContainer = styled.div`
    display: flex;
    gap: 24px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-top: 40px;
`;

export const CopyrightContainer = styled.div`
    word-wrap: break-word;
    font-size: 16px;
    color: #ffffff;
    cursor: pointer;
    text-align: center;
    margin-top: 52px;
`;
