import React, { useState } from 'react';
import { ButtonGroupContainer, StyledButton } from './multi-select-button-group.styles';

const SwxMultiSelectButtonGroup = ({ options, onChange }) => {
    const [selectedValues, setSelectedValues] = useState([]);

    const handleButtonClick = value => {
        const isSelected = selectedValues.includes(value);
        let updatedValues;

        if (isSelected) {
            updatedValues = selectedValues.filter(selectedValue => selectedValue !== value);
        } else {
            updatedValues = [...selectedValues, value];
        }

        setSelectedValues(updatedValues);
        onChange(updatedValues);
    };

    return (
        <ButtonGroupContainer>
            {options.map(option => (
                <StyledButton
                    key={option.value}
                    onClick={() => handleButtonClick(option.value)}
                    selected={selectedValues.includes(option.value)}>
                    {option.label}
                </StyledButton>
            ))}
        </ButtonGroupContainer>
    );
};

export default SwxMultiSelectButtonGroup;
