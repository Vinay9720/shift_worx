'use client';

import { Stack } from '@mui/material';

import { useUpdateEmployee } from '@/hooks/admin-employee';

import CertificateForm from '../add-certificate/CertificateForm';
import { styles } from '../add-certificate/add-certificate.styles';

function EditCerfification({ defaultValues, employeeId, onCancel }) {
    const formattedDefaultValues = {
        ...defaultValues,
        certificate_id: [JSON.stringify(defaultValues.certificate.id)],
        jurisdiction: defaultValues.jurisdiction,
        speciality: defaultValues.specialities.map(speciality => JSON.stringify(speciality.id)),
    };
    const { mutate: updateCertification } = useUpdateEmployee();

    return (
        <Stack direction='column' spacing={3} sx={styles.mainStack}>
            <CertificateForm
                onSubmit={employeeData => updateCertification({ id: employeeId, employeeData })}
                defaultValues={formattedDefaultValues}
                onCancel={onCancel}
            />
        </Stack>
    );
}

export default EditCerfification;
