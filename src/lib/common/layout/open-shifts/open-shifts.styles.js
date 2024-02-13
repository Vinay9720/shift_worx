import { Stack } from '@mui/material';
import styled from 'styled-components';

export const styles = {
    openShift: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '12px',
    },
};

export const StyledCtn = styled(Stack)`
    ${({ theme, employeeName, scheduleType }) => `
     border-top:  ${!employeeName && scheduleType ? `2px solid ${theme.backgroundColor.lightOrange}` : null};
     border-left: 2px solid ${!employeeName && scheduleType ? theme.backgroundColor.lightOrange : null};
     border-bottom: 2px solid ${!employeeName && scheduleType ? theme.backgroundColor.lightOrange : null};
     border-right: 0;
     box-sizing: content-box;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: ${({ height }) => height}px,
 `};
`;
