import { useState } from 'react';
import { StyledSwitch } from './switch.styles';

const SwxSwitch = () => {
    const [checked, setChecked] = useState(false);

    const handleChange = event => {
        setChecked(event.target.checked);
    };
    return <StyledSwitch checked={checked} onChange={handleChange} sx={{ ml: 1 }} />;
};

export default SwxSwitch;
