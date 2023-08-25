import { LinearProgress } from '@mui/material';
import Box from '@mui/material/Box';

import SwxTypography from '../typography';

const SwxLinearProgress = props => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
            <Box sx={{ width: '100%', mr: 1 }}>
                <LinearProgress
                    variant='determinate'
                    sx={{
                        height: 10,
                        borderRadius: 100,
                        '& .MuiLinearProgress-bar': { backgroundColor: '#0080F5' },
                    }}
                    {...props}
                />
            </Box>
            <Box sx={{ minWidth: 35 }}>
                <SwxTypography color='swxBlack' weight='thin' size='semiMedium'>{`${Math.round(
                    props.value
                )}%`}</SwxTypography>
            </Box>
        </Box>
    );
};

export default SwxLinearProgress;
