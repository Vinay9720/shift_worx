// 'use client';

// import React, { useState } from 'react';
// import moment from 'moment';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
// import { MenuItem, Stack } from '@mui/material';

// import { Icon } from '@/lib/common/icons';

// import { StyledAMPMSelect, StyledContainerwrapper, StyledTimeField, StyledWrapper, styles } from './time-picker.styles';

// import SwxTypography from '../typography';
// import { SpanContainer } from '../common.styles';

// export default function SwxTimeComponent({ onChange, time, format, label, width, required }) {
//     const [nbv, setAmPm] = useState('am');
//     // const [prevTime, amOrPm = 'am'] = time && time.split(/(?<=[0-9])(?=[apm]+)/i);
//     let prevTime;
//     let amOrPm;
//     if (time) {
//         [prevTime, amOrPm = 'am'] = time.split(/(?<=[0-9])(?=[apm]+)/i);
//     } else {
//         prevTime = undefined; // or set a default value if needed
//         amOrPm = 'am'; // or set a different default value if needed
//     }
// const [open, setOpen] = useState(false);

// const handleCustomIconClick = () => {
//     setOpen(!open);
// };

//     const handleInputChange = event => {
//         if (event.target) {
//             const { value } = event.target;
//             setAmPm(value);
//             onChange(`${prevTime}${value}`);
//         } else {
//             const formattedValue = event.format('hh:mm');
//             onChange(`${formattedValue}${amOrPm}`);
//         }
//     };
//     return (
//         <Stack direction='column' spacing={0.5} style={{ width }}>
//             {label && (
//                 <SpanContainer>
//                     <label>{label}</label>
//                     {!required && (
//                         <SwxTypography size='semiMedium' color='lightGray' weight='thin' className='Manrope'>
//                             Optional
//                         </SwxTypography>
//                     )}
//                 </SpanContainer>
//             )}
//             <StyledContainerwrapper>
//                 <LocalizationProvider dateAdapter={AdapterMoment}>
//                     <DemoContainer components={['TimeField']} sx={{ flexGrow: 1, overflow: 'hidden' }}>
//                         <StyledTimeField
//                             format={format}
//                             name='time'
//                             onChange={handleInputChange}
//                             value={moment(time, 'hh:mma')}
//                             minutesStep={15}
//                         />
//                     </DemoContainer>
//                 </LocalizationProvider>
//                 <StyledWrapper>
//                     <StyledAMPMSelect
//                         value={ampm}
//                         name='ampm'
//                         onChange={handleInputChange}
//                         onClick={handleCustomIconClick}
//                         open={open}
//                         onClose={() => setOpen(false)}
//                         IconComponent={() => (
//                             <Icon
//                                 open={open}
//                                 onClick={handleCustomIconClick}
//                                 name='dropdown-arrow'
//                                 height={14}
//                                 width={14}
//                                 styles={styles.iconStyles}
//                             />
//                         )}>
//                         <MenuItem value='am'>AM</MenuItem>
//                         <MenuItem value='pm'>PM</MenuItem>
//                     </StyledAMPMSelect>
//                 </StyledWrapper>
//             </StyledContainerwrapper>
//         </Stack>
//     );
// }

'use client';

import React, { useState } from 'react';
import moment from 'moment';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { Stack } from '@mui/material';
import { StyledContainerwrapper, StyledTimeField } from './time-picker.styles';
import SwxTypography from '../typography';
import { SpanContainer } from '../common.styles';

export default function SwxTimeComponent({ onChange, time, label, width, required }) {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleInputChange = event => {
        const formattedValue = event.format('hh:mm A');
        onChange(formattedValue);
    };

    return (
        <Stack direction='column' spacing={0.5} style={{ width }}>
            {label && (
                <SpanContainer>
                    <label>{label}</label>
                    {!required && (
                        <SwxTypography size='semiMedium' color='lightGray' weight='thin' className='Manrope'>
                            Optional
                        </SwxTypography>
                    )}
                </SpanContainer>
            )}
            <StyledContainerwrapper>
                <LocalizationProvider dateAdapter={AdapterMoment}>
                    <DemoContainer components={['TimePicker']} sx={{ flexGrow: 1, overflow: 'hidden' }}>
                        <StyledTimeField
                            format='hh:mm A'
                            name='time'
                            onChange={handleInputChange}
                            value={moment(time, 'hh:mm A')}
                            minutesStep={15}
                            // disableOpenPicker
                            open={open}
                            onOpen={handleOpen}
                            onClose={() => {
                                setOpen(false);
                            }}
                            onFocus={handleOpen}
                        />
                    </DemoContainer>
                </LocalizationProvider>
            </StyledContainerwrapper>
        </Stack>
    );
}
