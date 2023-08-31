'use client';

import { useSelector, useDispatch } from 'react-redux';
import { Modal } from '@mui/material';

import { openModal, closeModal } from '@/lib/store/slices/modal-slice';
import { setCurrentStep } from '@/lib/store/slices/add-employee-steps-slice';

import {
    ModalContainer,
    HeaderContainer,
    FooterContainer,
    BodyContainer,
    StyledNumber,
    StyledProgress,
    StyledTitle,
    StepsContainer,
    StyledStep,
} from './add-employee.styles';
import AddEmployeeStep1 from './AddEmployeeStep1';
import AddEmployeeStep2 from './AddEmployeeStep2';
import AddEmployeeStep3 from './AddEmployeeStep3';

import { FormSubmitButton } from '../common/form-components';
import { Icon } from '../common/icons';
import { SwxButton, SwxTypography } from '../common/components';

export default function AddEmployee() {
    const dispatch = useDispatch();
    const { isOpen } = useSelector(state => state.modal);
    const { currentStep } = useSelector(state => state.addEmployeeModule);

    const renderFooterSection = () => {
        return (
            <FooterContainer>
                <SwxButton onClick={() => dispatch(closeModal())} variant='text'>
                    Cancel
                </SwxButton>
                <FormSubmitButton variant='contained' buttonName={currentStep === 3 ? 'Submit' : 'Next'} />
            </FooterContainer>
        );
    };

    // if (isLoading) {
    //     return <Loader />;
    // }

    return (
        <div className='flex items-center mt-0'>
            <SwxButton
                startIcon={<Icon width={17} height={12} name='addition' styles={{ fill: '#FFFFFF' }} />}
                size='small'
                onClick={e => {
                    e.preventDefault();
                    dispatch(openModal());
                }}
                padding='10px 16px'
                variant='contained'
                weight='semiBold'>
                Add Employee
            </SwxButton>
            <Modal open={isOpen} onClose={() => dispatch(closeModal())}>
                <ModalContainer>
                    <HeaderContainer>
                        <StyledTitle>Add Employee</StyledTitle>
                        <StepsContainer>
                            <StyledStep onClick={() => dispatch(setCurrentStep(1))}>
                                <StyledNumber active={currentStep === 1 && true}>1</StyledNumber>
                                <SwxTypography color='swxBlack' size='smallest' weight='thin'>
                                    Profile Information
                                </SwxTypography>
                            </StyledStep>
                            <StyledStep onClick={() => dispatch(setCurrentStep(2))}>
                                <StyledNumber active={currentStep === 2 && true}>2</StyledNumber>
                                <SwxTypography color='swxBlack' size='smallest' weight='thin'>
                                    Personal Document
                                </SwxTypography>
                            </StyledStep>
                            <StyledStep onClick={() => dispatch(setCurrentStep(3))}>
                                <StyledNumber active={currentStep === 3 && true}>3</StyledNumber>
                                <SwxTypography color='swxBlack' size='smallest' weight='thin'>
                                    Certifications
                                </SwxTypography>
                            </StyledStep>
                        </StepsContainer>
                    </HeaderContainer>
                    <StyledProgress variant='determinate' value={currentStep * 33.3} />
                    <BodyContainer>
                        {currentStep === 1 && <AddEmployeeStep1 footer={renderFooterSection()} />}
                        {currentStep === 2 && <AddEmployeeStep2 footer={renderFooterSection()} />}
                        {currentStep === 3 && <AddEmployeeStep3 />}
                    </BodyContainer>
                </ModalContainer>
            </Modal>
        </div>
    );
}
