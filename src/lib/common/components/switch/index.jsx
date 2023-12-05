import { useState } from 'react';
import { StyledSwitch } from './switch.styles';
import { FormControlLabel } from '@mui/material';

const SwxSwitch = () => {
    const [checked, setChecked] = useState(true);

    const handleChange = event => {
        setChecked(event.target.checked);
    };
    return <FormControlLabel control={<StyledSwitch checked={checked} onChange={handleChange} sx={{ ml: 1 }} />} />;
};

export default SwxSwitch;
