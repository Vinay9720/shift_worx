import { StyledGridRow, StyledGridLinesCtn, StyledBoderBoxSlotDiv } from './day-wise-schedule.styles';

export const GridLines = ({ rowsCount = 0 }) => {
    const generateCells = () => {
        const k = [];
        for (let i = 0; i < 24; i++) {
            k.push(i);
        }
        return k.map((cell, i) => <StyledBoderBoxSlotDiv key={i} />);
    };

    const generateRows = () => {
        const k = [];
        for (let i = 0; i < rowsCount; i++) {
            k.push(i);
        }
        return k;
    };

    return (
        <StyledGridLinesCtn>
            {generateRows().map((row, i) => (
                <StyledGridRow key={i}>{generateCells()}</StyledGridRow>
            ))}
        </StyledGridLinesCtn>
    );
};
