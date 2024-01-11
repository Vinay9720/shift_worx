import { Stack } from '@mui/material';
import { SwxTypography } from '../../components';
import { Icon } from '../../icons';
import { styles } from './open-shifts.styles';

function OpenShifts() {
    return (
        <Stack sx={styles.openShift}>
            <Icon name='shift-unAssigned' width={16} height={16} />
            <SwxTypography className='Manrope' weight='semiBold' size='semiMedium' color='swxGray'>
                Open Shift
            </SwxTypography>
        </Stack>
    );
}
export default OpenShifts;
