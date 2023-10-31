import React, { useState, useEffect, useRef } from 'react';
import { IconButton } from '@mui/material';
import { Calendar } from 'react-multi-date-picker';

import { CalenderContainer } from './calender-input.styles';

import { Icon } from '../../icons';

const SwxCalenderInput = ({ onChange }) => {
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
                            onChange={date => {
                                setCalendarOpen(false);
                                onChange(date);
                            }}
                        />
                    </CalenderContainer>
                </>
            )}
        </div>
    );
};

export default SwxCalenderInput;
