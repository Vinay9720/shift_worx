'use client';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

import { StyledSelect, StyledInsideLabel } from './multi-select.styles';

import SwxTypography from '../typography';

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
}) {
    return (
        <div style={{ width: width || '100%', ...style }}>
            {OutSideLabel && <OutSideLabel />}
            <FormControl sx={{ width: '100%' }}>
                <StyledInsideLabel shrink={false} id='multiple-checkbox-label'>
                    {insideLabel}
                </StyledInsideLabel>
                <StyledSelect
                    // Icon needs to be updated
                    // IconComponent={() => {
                    //     return <Icon styles='fill-lightGray mr-2' name='select-down-arrow' height={7} width={12} />;
                    // }}
                    multiple={multiple}
                    padding={padding}
                    value={value}
                    onChange={onChange}
                    renderValue={selected => {
                        return (
                            <span style={{ marginLeft: `${multiple && '4rem'}` }}>
                                {multiple ? selected.length : selected}
                            </span>
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
