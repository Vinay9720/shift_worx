import styled from 'styled-components';

export const getBackgroundColor = kind => {
    switch (kind) {
        case 'LPN':
            return 'lightBlue';
        case 'RN':
            return 'palePink';
        case 'CNA':
            return 'paleOrange';
        default:
            return 'palePink';
    }
};

export const BannerWrapper = styled.div`
    height: 74px;
    position: absolute;
`;

export const Bannercontainer = styled.div`
    height: 56px;
    margin-top: 9px;
    padding: 9px 12px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    ${({ theme, kind, employeeName }) => `
    border: 1.5px solid ${theme.borderColor.white};
    background-color: ${
        !employeeName ? theme.backgroundColor.darkGray : theme.backgroundColor[getBackgroundColor(kind)]
    };
`};
`;
