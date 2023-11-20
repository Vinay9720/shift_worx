import styled from 'styled-components';

export const getBackgroundColor = kind => {
    switch (kind) {
        case 'LPN':
            return 'lightblue';
        case 'RN':
            return 'lightpink';
        case 'CNA':
            return 'lightOrange';
        default:
            return 'lightpink';
    }
};

export const getBorderColor = kind => {
    switch (kind) {
        case 'LPN':
            return 'blue';
        case 'RN':
            return 'green';
        case 'CNA':
            return 'pink';
        default:
            return 'white';
    }
};

export const BannerWrapper = styled.div`
    height: 74px;
    position: absolute;
    ${({ theme, kind }) => `
        // background-color: ${theme.backgroundColor[getBackgroundColor(kind)]};
        // border: 1.5px solid ${theme.borderColor[getBorderColor(kind)]};
    `};
`;

export const Bannercontainer = styled.div`
    height: 56px;
    margin-top: 9px;
    padding: 9px 12px;
    border-radius: 10px;
    display: flex;
    gap: 16px;
    ${({ theme }) => `
        background-color: ${theme.backgroundColor.palePink};
        border: 1.5px solid ${theme.borderColor.white};
    `};
`;
