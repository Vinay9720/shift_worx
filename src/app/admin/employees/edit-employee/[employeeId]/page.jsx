'use client';

import { useSearchParams } from 'next/navigation';
import { useSelector } from 'react-redux';
import { Stack } from '@mui/material';

import { SwxButton } from '@/modules/common/components';
import { useEditEmployeeNavigation } from '@/hooks/common';
import { EditEmployeeLayout } from '@/modules/common/layout';
import { EditEmployeeStep1, EditEmployeeStep2, EditEmployeeStep3, EditEmployeeStep4 } from '@/modules/edit-employee';
import { useEmployee } from '@/hooks/admin-employee';
// import { setCurrentStep } from '@/lib/store/slices/edit-employee-module';

// const stepsMap = {
//     1: 'general',
//     2: 'personal_documents',
//     3: 'certificates',
//     4: 'notes',
// };

export default function Page({ params }) {
    const searchParams = useSearchParams();
    const { data: employeeData } = useEmployee(params.employeeId);
    const { currentStep } = useSelector(state => state.editEmployeeModule);
    const navigateTo = useEditEmployeeNavigation();
    const currentStepName = searchParams.get('step');

    const renderFooterSection = () => {
        return (
            <Stack spacing={0.5} direction='row' style={{ float: 'right', padding: '60px 0px' }}>
                {(currentStep === 1 || currentStep === 2) && (
                    <SwxButton variant='contained' size='small' padding='6px 24px' radius='large' weight='bold'>
                        Save
                    </SwxButton>
                )}
                <SwxButton
                    size='small'
                    onClick={() => navigateTo(currentStep - 1)}
                    padding='6px 24px'
                    radius='large'
                    variant='outlined'
                    weight='bold'>
                    {'< '}Previous
                </SwxButton>
                <SwxButton
                    size='small'
                    onClick={() => navigateTo(currentStep + 1)}
                    padding='6px 24px'
                    radius='large'
                    variant='outlined'
                    weight='bold'>
                    Next{' >'}
                </SwxButton>
            </Stack>
        );
    };

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
                    {currentStepName === 'general' && (
                        <EditEmployeeStep1 employeeData={employeeData} footer={renderFooterSection()} />
                    )}
                    {currentStepName === 'documents' && (
                        <EditEmployeeStep2 employeeData={employeeData} footer={renderFooterSection()} />
                    )}
                    {currentStepName === 'certificates' && (
                        <EditEmployeeStep3 employeeData={employeeData} footer={renderFooterSection()} />
                    )}
                    {currentStepName === 'notes' && <EditEmployeeStep4 />}
                </div>
            </div>
        </EditEmployeeLayout>
    );
}
