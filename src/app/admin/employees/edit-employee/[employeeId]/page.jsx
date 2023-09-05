'use client';

import { useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
import { Stack } from '@mui/material';

import { FormSubmitButton } from '@/modules/common/form-components';
import { SwxButton } from '@/modules/common/components';
import { useEditEmployeeNavigation } from '@/hooks/common';
import { EditEmployeeLayout } from '@/modules/common/layout';
import { EditEmployeeStep1, EditEmployeeStep2, EditEmployeeStep3, EditEmployeeStep4 } from '@/modules/edit-employee';
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
        <EditEmployeeLayout>
            <div
                style={{
                    minHeight: '88vh',
                    display: 'flex',
                    flexDirection: 'column',
                    marginTop: `${currentStepName !== 'notes' ? '3.5rem' : '1rem'}`,
                }}>
                <div style={{ flex: '1' }}>
                    {isEmployeeLoading ? (
                        <div>Loading...</div>
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
                            {currentStepName === 'notes' && <EditEmployeeStep4 />}
                        </>
                    )}
                </div>
            </div>
        </EditEmployeeLayout>
    );
}
