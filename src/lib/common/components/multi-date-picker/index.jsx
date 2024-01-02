'use client';

import { IconButton } from '@mui/material';
import DatePicker from 'react-multi-date-picker';
import DatePanel from 'react-multi-date-picker/plugins/date_panel';
import moment from 'moment';
import Icon from 'react-multi-date-picker/components/icon';
import { isArray } from 'lodash';

export default function MultiDatePicker({ value, multiple, range, onChange }) {
    return (
        <>
            <DatePicker
                multiple={multiple}
                render={(dateValue, openCalendar) => {
                    return (
                        <IconButton onClick={openCalendar}>
                            <Icon styles='fill-brand' name='left-arrow' aria-hidden='true' height={20} width={20} />
                        </IconButton>
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
                    }
                }}
                range={range || false}
                plugins={multiple ? [<DatePanel position='left' key='plugin-1' removeButton={false} />] : []}
            />
        </>
    );
}
