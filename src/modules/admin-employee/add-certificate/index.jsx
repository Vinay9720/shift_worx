'use client';

import { Stack } from '@mui/material';
import { useDispatch } from 'react-redux';

import { useAddEmployee } from '@/hooks/admin-employee';
import { closeAddCertificateForm } from '@/lib/store/slices/add-employee-module';

import CertificateForm from './CertificateForm';
import { styles } from './add-certificate.styles';

function AddCerfification({ defaultValues, employeeId, onCancel }) {
    const dispatch = useDispatch();

    const { mutate: addEmployee } = useAddEmployee();

    return (
        <Stack direction='column' spacing={3} sx={styles.mainStack}>
            <CertificateForm
                onSubmit={employeeData => addEmployee({ employeeData, employeeId })}
                defaultValues={defaultValues}
                onCancel={onCancel || (() => dispatch(closeAddCertificateForm()))}
            />
        </Stack>
    );
}

export default AddCerfification;
