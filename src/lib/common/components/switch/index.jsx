import { useState } from 'react';
import { StyledSwitch } from './switch.styles';

const SwxSwitch = () => {
    const [checked, setChecked] = useState(false);

    const handleChange = event => {
        setChecked(event.target.checked);
    };
    return (
        <StyledSwitch
            checked={checked}
            onChange={handleChange}
            sx={{ ml: 1, width: '42px', height: '26px', padding: 0 }}
        />
    );
};

export default SwxSwitch;
