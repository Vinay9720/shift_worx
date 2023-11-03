'use client';

import { Stack } from '@mui/material';
import { useDispatch } from 'react-redux';

import { useAddEmployee } from '@/hooks/admin-employee';
import { closeAddCertificateForm } from '@/lib/store/slices/add-employee-module';

import CertificateForm from './CertificateForm';
import { styles } from './add-certificate.styles';

function AddCerfification({ defaultValues, employeeId }) {
    const dispatch = useDispatch();

    const { mutate: addEmployee } = useAddEmployee();

    return (
        <Stack direction='column' spacing={3} sx={styles.mainStack}>
            <CertificateForm
                onSubmit={formValues => addEmployee(formValues, employeeId)}
                defaultValues={defaultValues}
                onCancel={() => dispatch(closeAddCertificateForm())}
            />
        </Stack>
    );
}

export default AddCerfification;
