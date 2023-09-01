import styled from 'styled-components';

export const CertificationUpperSection = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width: 800px) {
        flex-direction: column; /* Switch to column layout when screen size is not enough */
    }
`;

export const CertificationUpperRightSection = styled.div`
    display: flex;
    gap: 16px;
`;

export const CertificationLowerSection = styled.div`
    display: flex;
    gap: 48px;
    @media (max-width: 800px) {
        flex-direction: column; /* Switch to column layout when screen size is not enough */
        gap: 12px;
    }
`;

export const CertificationLowerLeftSection = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CertificationLowerRightSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const CertificationsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const CertificationsWrapper = styled.div`
    margin: 0px 76px 0px 24px;
`;

export const CertificationContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;
    display: flex;
    gap: 8px;
    ${({ theme }) => `
        border-radius: ${theme.borderRadius.verySmall};
        background: ${theme.backgroundColor.lighterGray};
    `}
`;
