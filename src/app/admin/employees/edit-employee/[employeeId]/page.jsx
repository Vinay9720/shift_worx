'use client';

import { useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
import { Stack } from '@mui/material';

import { FormSubmitButton } from '@/lib/common/form-components';
import { SwxButton, SwxLoader } from '@/lib/common/components';
import { useEditEmployeeNavigation } from '@/hooks/common';
import { EditEmployeeLayout } from '@/lib/common/layout';
import {
    EditEmployeeStep1,
    EditEmployeeStep2,
    EditEmployeeStep3,
    EditEmployeeStep4,
} from '@/modules/admin-employee/edit-employee';
import { useEmployee } from '@/hooks/admin-employee';

const stepsMap = {
    profile_information: 1,
    personal_documents: 2,
    certificates: 3,
    notes: 4,
};

export default function Page({ params }) {
    const searchParams = useSearchParams();
    const { data: employeeData, isLoading: isEmployeeLoading } = useEmployee(params.employeeId);
    const navigateTo = useEditEmployeeNavigation();
    const currentStepName = searchParams.get('step');

    const isCertificateExpired = certificate => {
        const expirationDate = certificate.expiration_date;

        if (expirationDate && new Date(expirationDate) < new Date()) {
            return true;
        }

        return false;
    };

    const anyCertificateExpired = (employeeData ? employeeData.certificates : []).some(isCertificateExpired);

    const tabs = [
        { label: 'General Information', step: 'profile_information' },
        { label: 'Personal Documents', step: 'personal_documents' },
        { label: 'Certs/Licenses', step: 'certificates', icon: anyCertificateExpired ? 'alert' : undefined },
        { label: 'Notes', step: 'notes' },
    ];

    const renderFooterSection = useCallback(() => {
        return (
            <Stack spacing={0.5} direction='row' style={{ float: 'right', padding: '60px 0px' }}>
                {(stepsMap[currentStepName] === 1 || stepsMap[currentStepName] === 2) && (
                    <FormSubmitButton
                        size='small'
                        padding='6px 24px'
                        radius='large'
                        variant='contained'
                        buttonName='Save'
                        weight='bold'
                    />
                )}
                <SwxButton
                    size='small'
                    onClick={() => navigateTo(stepsMap[currentStepName] - 1)}
                    padding='6px 24px'
                    radius='large'
                    variant='outlined'
                    weight='bold'>
                    {'< '}Previous
                </SwxButton>
                <SwxButton
                    size='small'
                    onClick={() => navigateTo(stepsMap[currentStepName] + 1)}
                    padding='6px 24px'
                    radius='large'
                    variant='outlined'
                    weight='bold'>
                    Next{' >'}
                </SwxButton>
            </Stack>
        );
    }, [stepsMap[currentStepName], navigateTo]);

    return (
        <EditEmployeeLayout tabs={tabs}>
            <div
                style={{
                    minHeight: '88vh',
                    display: 'flex',
                    flexDirection: 'column',
                    marginTop: `${currentStepName !== 'notes' ? '3.5rem' : '1rem'}`,
                }}>
                <div style={{ flex: '1' }}>
                    {isEmployeeLoading ? (
                        <SwxLoader loading={isEmployeeLoading} />
                    ) : (
                        <>
                            {currentStepName === 'profile_information' && (
                                <EditEmployeeStep1 employeeData={employeeData} footer={renderFooterSection()} />
                            )}
                            {currentStepName === 'personal_documents' && (
                                <EditEmployeeStep2 employeeData={employeeData} footer={renderFooterSection()} />
                            )}
                            {currentStepName === 'certificates' && (
                                <EditEmployeeStep3 employeeData={employeeData} footer={renderFooterSection()} />
                            )}
                            {currentStepName === 'notes' && <EditEmployeeStep4 employeeData={employeeData} />}
                        </>
                    )}
                </div>
            </div>
        </EditEmployeeLayout>
    );
}
