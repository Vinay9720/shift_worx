'use client';

import React, { useState, useRef, useEffect } from 'react';
import { isEmpty, isString } from 'lodash';
import { FormControlLabel, Checkbox } from '@mui/material';

import { ListBoxWrapper, TitleContainer, ListContainer } from './ListBox.styles';

import { Icon } from '../../icons';
import SwxTypography from '../typography';

const ListBox = ({ label, options, setSelectedOptions, selectedOptions, maxHeight, multiple }) => {
    const [isOpen, setIsOpen] = useState(false);
    const listBoxRef = useRef(null);

    const handleClickOutside = event => {
        if (listBoxRef.current && !listBoxRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handleCheckboxChange = event => {
        const { value, checked } = event.target;
        if (checked) {
            setSelectedOptions([...selectedOptions, value]);
        } else {
            setSelectedOptions(selectedOptions.filter(option => option !== value));
        }
    };

    return (
        <ListBoxWrapper maxHeight={maxHeight} ref={listBoxRef}>
            {!isOpen ? (
                <TitleContainer>
                    {!isEmpty(selectedOptions) ? (
                        <SwxTypography color='swxSlightlyBlack'>
                            {selectedOptions
                                .map(value => {
                                    const foundObject = options.find(option =>
                                        isString(option.value) ? option.value : JSON.stringify(option.value) === value
                                    );
                                    return foundObject && foundObject.label;
                                })
                                .join(', ')}
                        </SwxTypography>
                    ) : (
                        <SwxTypography color='lightGray'>{label}</SwxTypography>
                    )}
                </TitleContainer>
            ) : (
                <ListContainer>
                    {options.map((option, index) => {
                        return (
                            <FormControlLabel
                                key={index}
                                sx={{ color: '#030303' }}
                                control={
                                    <Checkbox
                                        checked={(selectedOptions || []).includes(
                                            isString(option.value) ? option.value : JSON.stringify(option.value)
                                        )}
                                        onChange={handleCheckboxChange}
                                        value={option.value}
                                        disabled={
                                            (selectedOptions || []).includes(
                                                isString(option.value) ? option.value : JSON.stringify(option.value)
                                            )
                                                ? false
                                                : !multiple && !isEmpty(selectedOptions || []) && true
                                        }
                                    />
                                }
                                label={option.label}
                            />
                        );
                    })}
                </ListContainer>
            )}
            <TitleContainer style={{ marginTop: '8px', cursor: 'pointer' }}>
                <Icon
                    width={12}
                    height={7}
                    onClick={() => setIsOpen(!isOpen)}
                    name='select-down-arrow'
                    styles={{ fill: '#ffffff' }}
                />
            </TitleContainer>
        </ListBoxWrapper>
    );
};

export default ListBox;
