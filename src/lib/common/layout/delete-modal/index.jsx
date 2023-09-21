import { Stack, Divider } from '@mui/material';
import { useDispatch } from 'react-redux';

import { closeModal } from '@/lib/store/slices/modal-slice';

import { ModalContainer } from './delete-modal.styles';

import { SwxModal } from '..';
import { Icon } from '../../icons';
import { SwxTypography, SwxButton } from '../../components';

export default function DeleteModal({ modalName, entityName, onConfirm }) {
    const dispatch = useDispatch();
    return (
        <SwxModal modalName={modalName}>
            <ModalContainer>
                <Stack
                    spacing={3}
                    direction='column'
                    justifyContent='center'
                    alignItems='center'
                    margin='68px 0px 36px 0px'>
                    <Icon styles={{ fill: '#F43C02' }} name='trash' height={64} width={64} />
                    <Stack alignItems='center'>
                        <SwxTypography color='swxBlack' weight='bold' size='semiLarge'>
                            Delete {entityName}
                        </SwxTypography>
                        <SwxTypography color='lightGray' weight='thin' size='small'>
                            Are you sure you want to delete this {entityName} ?
                        </SwxTypography>
                    </Stack>
                </Stack>
                <Divider flexItem />
                <Stack spacing={3} justifyContent='flex-end' direction='row' style={{ margin: '14px 24px' }}>
                    <SwxButton onClick={() => dispatch(closeModal({ modalName }))} variant='text'>
                        Cancel
                    </SwxButton>
                    <SwxButton onClick={onConfirm} variant='contained' buttonName='Submit'>
                        Yes
                    </SwxButton>
                </Stack>
            </ModalContainer>
        </SwxModal>
    );
}
