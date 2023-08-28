'use client';

import Modal from '@mui/material/Modal';
import { useSelector, useDispatch } from 'react-redux';

import { closeModal } from '@/lib/store/slices/modal-slice';

import { StyledModalContent } from './modal.styles';

export default function SwxModal({ children }) {
    const dispatch = useDispatch();
    const open = useSelector(state => state.modal.isOpen);

    return (
        <Modal open={open} onClose={() => dispatch(closeModal())}>
            <StyledModalContent>{children}</StyledModalContent>
        </Modal>
    );
}
