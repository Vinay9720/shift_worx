'use client';

import { Stack } from '@mui/material';
import { useDispatch } from 'react-redux';

import { useAddEmployee } from '@/hooks/admin-employee';
import { closeAddCertificateForm, setAddEmployeeDataStep3 } from '@/lib/store/slices/add-employee-module';

import CertificateForm from './CertificateForm';
import { styles } from './add-certificate.styles';
import { isEmpty } from 'lodash';

function AddCerfification({ defaultValues, employeeId, onCancel }) {
    const dispatch = useDispatch();
    let formattedDefaultValues;
    if (!isEmpty(defaultValues)) {
        formattedDefaultValues = {
            ...defaultValues,
            certificate_id: [JSON.stringify(defaultValues.certificate.id)],
            jurisdiction: [defaultValues.jurisdiction],
            speciality: defaultValues.specialities.map(speciality => JSON.stringify(speciality.id)),
            speciality_ids: defaultValues.specialities.map(speciality => JSON.stringify(speciality.id)),
        };
    } else {
        formattedDefaultValues = {};
    }

    const { mutate: addEmployee, isLoading } = useAddEmployee();

    return (
        <Stack direction='column' spacing={3} sx={styles.mainStack}>
            <CertificateForm
                onSubmit={employeeData => {
                    dispatch(setAddEmployeeDataStep3(employeeData));
                    addEmployee({ employeeData, employeeId });
                }}
                defaultValues={formattedDefaultValues}
                onCancel={
                    onCancel ||
                    (() => {
                        dispatch(closeAddCertificateForm());
                    })
                }
                loading={isLoading}
            />
        </Stack>
    );
}

export default AddCerfification;
