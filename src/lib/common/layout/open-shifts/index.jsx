import { Stack } from '@mui/material';
import { SwxButton, SwxTypography } from '../../components';
import { Icon } from '../../icons';
import { styles } from './open-shifts.styles';
import { openModal } from '@/lib/store/slices/modal-slice';
import { useDispatch } from 'react-redux';

function OpenShifts({ modalName }) {
    const dispatch = useDispatch();
    return (
        <Stack
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: modalName ? 'flex-start' : null,
                paddingRight: modalName ? '3rem' : null,
            }}>
            <Stack sx={styles.openShift}>
                <Icon name='shift-unAssigned' width={16} height={16} />
                <SwxTypography className='Manrope' weight='semiBold' size='semiMedium' color='swxGray'>
                    Open Shift
                </SwxTypography>
            </Stack>
            {modalName && (
                <SwxButton
                    startIcon={<Icon width={17} height={12} name='addition' styles={{ fill: '#1F6FA9' }} />}
                    size='small'
                    onClick={e => {
                        e.preventDefault();
                        dispatch(openModal({ modalName }));
                    }}
                    padding='10px 16px'
                    variant='text'
                    weight='semiBold'>
                    Assign
                </SwxButton>
            )}
        </Stack>
    );
}
export default OpenShifts;
