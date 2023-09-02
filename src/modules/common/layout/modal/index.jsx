'use client';

import Modal from '@mui/material/Modal';
import { useSelector, useDispatch } from 'react-redux';

import { closeModal } from '@/lib/store/slices/modal-slice';

export default function SwxModal({ children, modalName }) {
    const dispatch = useDispatch();
    const isOpen = useSelector(state => state.modals[modalName]);
    return (
        <Modal open={isOpen} onClose={() => dispatch(closeModal({ modalName }))}>
            {children}
        </Modal>
    );
}
