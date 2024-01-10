import React, { useState, useEffect, useRef } from 'react';
import { IconButton } from '@mui/material';
import { Calendar } from 'react-multi-date-picker';

import { CalenderContainer } from './calender-input.styles';

import { Icon } from '../../icons';
import moment from 'moment';
import { isArray } from 'lodash';

const SwxCalenderInput = ({ onChange, range, rangeHover }) => {
    const [calendarOpen, setCalendarOpen] = useState(false);
    const calendarRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = event => {
            if (calendarRef.current && !calendarRef.current.contains(event.target)) {
                setCalendarOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handleButtonClick = () => {
        setCalendarOpen(!calendarOpen);
    };

    return (
        <div style={{ display: 'flex', alignSelf: 'center', marginLeft: '8px' }} ref={calendarRef}>
            <IconButton onClick={() => handleButtonClick()}>
                <Icon
                    styles={{ fill: '#838A91', transform: 'rotate(270deg)' }}
                    name='left-arrow'
                    height={14}
                    width={14}
                />
            </IconButton>
            {calendarOpen && (
                <>
                    <CalenderContainer>
                        <Calendar
                            range={range}
                            rangeHover={rangeHover}
                            onChange={dates => {
                                if (isArray(dates)) {
                                    // When multiple dates are selected
                                    const formattedDates = dates.map(d => {
                                        const { day, month, year } = d;
                                        const date = moment({ month: month.index, day, year });
                                        return date.format('MM-DD-YYYY');
                                    });
                                    if (formattedDates.length === 2) {
                                        setCalendarOpen(false);
                                        onChange(formattedDates);
                                    }
                                } else {
                                    setCalendarOpen(false);
                                    onChange(dates);
                                }
                            }}
                        />
                    </CalenderContainer>
                </>
            )}
        </div>
    );
};

export default SwxCalenderInput;
