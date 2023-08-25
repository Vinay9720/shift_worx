'use client';

import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Modal } from '@mui/material';

import { Loader, Icon, SwxButton } from '@/components/common';
import { FormSubmitButton } from '@/components/form-components';

import {
    ModalContainer,
    HeaderContainer,
    FooterContainer,
    BodyContainer,
    StyledText,
    StyledNumber,
    StyledStep,
    StepsContainer,
    StyledTitle,
    StyledProgress,
} from './add-employee.styles';
import AddEmployeeStep1 from './AddEmployeeStep1';
import AddEmployeeStep2 from './AddEmployeeStep2';
import AddEmployeeStep3 from './AddEmployeeStep3';

export default function AddEmployee() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);
    const { isLoading } = useSelector(state => state.employees);

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const renderFooterSection = () => {
        return (
            <FooterContainer>
                <SwxButton onClick={() => setIsModalOpen(false)} variant='text'>
                    Cancel
                </SwxButton>
                <FormSubmitButton variant='contained' buttonName={currentStep === 3 ? 'Submit' : 'Next'} />
            </FooterContainer>
        );
    };

    if (isLoading) {
        return <Loader />;
    }

    return (
        <div className='flex items-center mt-0'>
            <SwxButton
                startIcon={<Icon width={17} height={12} name='addition' className='fill-white' />}
                size='small'
                onClick={e => {
                    e.preventDefault();
                    setIsModalOpen(true);
                }}
                padding='10px 16px'
                variant='contained'
                weight='semiBold'>
                Add Employee
            </SwxButton>
            <Modal open={isModalOpen} onClose={closeModal}>
                <ModalContainer>
                    <HeaderContainer>
                        <StyledTitle>Add Employee</StyledTitle>
                        <StepsContainer>
                            <StyledStep onClick={() => setCurrentStep(1)}>
                                <StyledNumber active={currentStep === 1 && true}>1</StyledNumber>
                                <StyledText color='swxBlack' size='smallest' weight='semiBold'>
                                    Profile Information
                                </StyledText>
                            </StyledStep>
                            <StyledStep onClick={() => setCurrentStep(2)}>
                                <StyledNumber active={currentStep === 2 && true}>2</StyledNumber>
                                <StyledText color='swxBlack' size='smallest' weight='semiBold'>
                                    Personal Document
                                </StyledText>
                            </StyledStep>
                            <StyledStep onClick={() => setCurrentStep(3)}>
                                <StyledNumber active={currentStep === 3 && true}>3</StyledNumber>
                                <StyledText color='swxBlack' size='smallest' weight='semiBold'>
                                    Certifications
                                </StyledText>
                            </StyledStep>
                        </StepsContainer>
                    </HeaderContainer>
                    <StyledProgress variant='determinate' value={currentStep * 33.3} />
                    <BodyContainer>
                        {isLoading ? (
                            <Loader />
                        ) : (
                            <>
                                {currentStep === 1 && (
                                    <AddEmployeeStep1
                                        footer={renderFooterSection()}
                                        setIsModalOpen={setIsModalOpen}
                                        setCurrentStep={setCurrentStep}
                                    />
                                )}
                                {currentStep === 2 && (
                                    <AddEmployeeStep2
                                        footer={renderFooterSection()}
                                        setIsModalOpen={setIsModalOpen}
                                        setCurrentStep={setCurrentStep}
                                    />
                                )}
                                {currentStep === 3 && (
                                    <AddEmployeeStep3 setCurrentStep={setCurrentStep} setIsModalOpen={setIsModalOpen} />
                                )}
                            </>
                        )}
                    </BodyContainer>
                </ModalContainer>
            </Modal>
        </div>
    );
}
