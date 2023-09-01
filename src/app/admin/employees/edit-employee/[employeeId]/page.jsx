'use client';

import { useSearchParams } from 'next/navigation';

import { EditEmployeeLayout } from '@/modules/common/layout';
import { EditEmployeeStep1, EditEmployeeStep2, EditEmployeeStep3, EditEmployeeStep4 } from '@/modules/edit-employee';

export default function Page({ params }) {
    const searchParams = useSearchParams();
    const currentStep = searchParams.get('step');
    console.log('search params', searchParams);
    return (
        <EditEmployeeLayout>
            <div
                style={{
                    minHeight: '88vh',
                    display: 'flex',
                    flexDirection: 'column',
                    marginTop: `${currentStep !== 'notes' ? '3.5rem' : '1rem'}`,
                }}>
                <div style={{ flex: '1' }}>
                    {currentStep === 'general' && (
                        <EditEmployeeStep1
                        // handleNavigationClick={handleNavigationClick}
                        // currentStep={currentStep}
                        // employee={employee}
                        // numberedStep={numberedStep}
                        // id={params.id}
                        />
                    )}
                    {currentStep === 'documents' && <EditEmployeeStep2 />}
                    {currentStep === 'certificates' && <EditEmployeeStep3 />}
                    {currentStep === 'notes' && <EditEmployeeStep4 />}
                    {/* {currentStep === 'certifications' && (
                        <EditEmployeeStep3
                            handleNavigationClick={handleNavigationClick}
                            currentStep={currentStep}
                            numberedStep={numberedStep}
                            id={params.id}
                        />
                    )}
                    {currentStep === 'notes' && <EditEmployeeStep4 />} */}
                </div>
            </div>
        </EditEmployeeLayout>
    );
}
