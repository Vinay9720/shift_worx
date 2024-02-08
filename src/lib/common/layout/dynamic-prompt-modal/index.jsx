import { Stack, Divider } from '@mui/material';
import { useDispatch } from 'react-redux';

import { closeModal } from '@/lib/store/slices/modal-slice';

import { ModalContainer } from './dynamic-prompt-modal.styles';

import { SwxModal } from '..';
import { Icon } from '../../icons';
import { SwxTypography, SwxButton } from '../../components';

export default function DynamicPromptModal({
    modalName,
    title,
    description,
    entityName,
    onConfirm,
    actionName,
    iconName,
}) {
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
                    <Icon
                        styles={{ fill: !actionName ? '#F43C02' : null }}
                        name={iconName || 'trash'}
                        height={64}
                        width={64}
                    />
                    <Stack alignItems='center'>
                        <SwxTypography color='swxBlack' weight='bold' size='semiLarge' className='Manrope'>
                            {title || actionName || 'Delete'} {!title && entityName}
                        </SwxTypography>
                        <SwxTypography color='lightGray' weight='thin' size='small' className='Manrope'>
                            {description || `Are you sure you want to ${actionName || 'Delete'} this ${entityName} ?`}
                        </SwxTypography>
                    </Stack>
                </Stack>
                <Divider flexItem />
                <Stack spacing={3} justifyContent='flex-end' direction='row' style={{ margin: '14px 24px' }}>
                    <SwxButton onClick={() => dispatch(closeModal({ modalName }))} variant='text' size='medium'>
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
