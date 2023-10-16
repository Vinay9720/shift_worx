'use client';

import { Stack } from '@mui/material';
import DatePicker from 'react-multi-date-picker';
import DatePanel from 'react-multi-date-picker/plugins/date_panel';
import moment from 'moment';
import Icon from 'react-multi-date-picker/components/icon';
import { isArray } from 'lodash';

import { StyledDateContainer } from './date-picker.styles';

import SwxTypography from '../typography';
import { SpanContainer } from '../common.styles';

export default function SwxDatePicker({
    width,
    label,
    multiple,
    padding,
    range,
    error,
    value,
    onChange,
    placeholder,
    styles,
    required,
}) {
    return (
        <Stack direction='column' spacing={0.5} style={{ width }}>
            {label && (
                <SpanContainer>
                    <label>{label}</label>
                    {!required && (
                        <SwxTypography size='semiMedium' color='lightGray' weight='thin'>
                            Optional
                        </SwxTypography>
                    )}
                </SpanContainer>
            )}
            <DatePicker
                multiple={multiple}
                render={(dateValue, openCalendar) => {
                    return (
                        <StyledDateContainer padding={padding} onClick={openCalendar} style={styles}>
                            {dateValue ? (
                                <SwxTypography color='swxSlightlyBlack'>{dateValue}</SwxTypography>
                            ) : (
                                <SwxTypography color='lightGray'>{placeholder || 'Select Date'}</SwxTypography>
                            )}
                            <Icon styles='fill-brand' name='eye' aria-hidden='true' height={20} width={20} />
                        </StyledDateContainer>
                    );
                }}
                value={value}
                highlightToday
                format='MM/DD/YYYY'
                placeholder='Select date'
                required
                currentDate={new Date()}
                onChange={dates => {
                    if (isArray(dates)) {
                        // When multiple dates are selected
                        const formattedDates = dates.map(d => {
                            const { day, month, year } = d;
                            const date = moment({ month: month.index, day, year });
                            return date.format('MM-DD-YYYY');
                        });
                        onChange(formattedDates);
                    } else {
                        // When a single date is selected
                        const { day, month, year } = dates;
                        const date = moment({ month: month.index, day, year });
                        onChange(date.format('MM-DD-YYYY'));
                    }
                }}
                range={range || false}
                plugins={multiple ? [<DatePanel position='left' key='plugin-1' removeButton={false} />] : []}
            />
            {error && (
                <SwxTypography color='red' size='smallest' weight='thin'>
                    Date is required
                </SwxTypography>
            )}
        </Stack>
    );
}
