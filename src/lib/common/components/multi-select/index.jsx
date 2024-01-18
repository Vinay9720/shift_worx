'use client';

// import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

import { StyledSelect, StyledInsideLabel, ValueContainer } from './multi-select.styles';

import SwxTypography from '../typography';
import { Icon } from '../../icons';
import { useRef, useState } from 'react';

const ITEM_HEIGHT = 40;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 'fit-content',
        },
    },
};

export default function SwxMultiSelect({
    insideLabel,
    outsideLabel: OutSideLabel,
    options,
    value,
    onChange,
    multiple,
    style,
    width,
    padding,
    errorText,
    marginleft,
    disabled,
}) {
    const [isOpen, setIsOpen] = useState(false);
    const selectRef = useRef(null);

    const handleIconClick = () => {
        setIsOpen(!isOpen);
    };

    const handleSelectClose = () => {
        setIsOpen(false);
    };
    return (
        <div style={{ width: width || '100%', ...style }}>
            {OutSideLabel && <OutSideLabel />}
            <FormControl sx={{ width: '100%' }}>
                <StyledInsideLabel
                    shrink={false}
                    id='multiple-checkbox-label'
                    sx={{ color: '#838A91', marginTop: '-3px' }}>
                    {insideLabel}
                </StyledInsideLabel>
                <StyledSelect
                    open={isOpen}
                    onClose={handleSelectClose}
                    ref={selectRef}
                    onClick={handleIconClick}
                    // Icon needs to be updated
                    IconComponent={() => {
                        if (!disabled) {
                            return (
                                <Icon
                                    name='dropdown-arrow'
                                    width='14'
                                    styles={{ margin: '2px 12px 4px 12px', cursor: 'pointer' }}
                                    onClick={handleIconClick}
                                />
                            );
                        }
                    }}
                    multiple={multiple}
                    padding={padding}
                    value={value}
                    disabled={disabled}
                    onChange={onChange}
                    renderValue={selected => {
                        return (
                            <ValueContainer marginleft={marginleft} multiple={multiple}>
                                {multiple ? selected.length : selected}
                            </ValueContainer>
                        );
                    }}
                    MenuProps={MenuProps}>
                    {(options || []).map((name, i) => (
                        <MenuItem key={i} value={name}>
                            {multiple && <Checkbox checked={value.indexOf(name) > -1} />}
                            <ListItemText primary={name} />
                        </MenuItem>
                    ))}
                </StyledSelect>
            </FormControl>
            {errorText && (
                <SwxTypography color='red' size='smallest' weight='thin'>
                    {errorText}
                </SwxTypography>
            )}
        </div>
    );
}
