import styled from 'styled-components';

const getBackgroundColor = kind => {
    switch (kind) {
        case 'LPN':
            return 'lightblue';
        case 'RN':
            return 'lightgreen';
        case 'CNA':
            return 'lightpink';
        default:
            return 'white';
    }
};

const getBorderColor = kind => {
    switch (kind) {
        case 'LPN':
            return 'blue';
        case 'RN':
            return 'green';
        case 'CNA':
            return 'pink';
        default:
            return 'black';
    }
};

export const BannerWrapper = styled.div`
    padding: 8px 12px;
    ${({ theme, kind }) => `
        background-color: ${theme.backgroundColor[getBackgroundColor(kind)]};
        border: 2px solid ${theme.borderColor[getBorderColor(kind)]};
    `}
`;

export const Bannercontainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
`;
