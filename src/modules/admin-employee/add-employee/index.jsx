'use client';

import { useSelector, useDispatch } from 'react-redux';
import { Stack } from '@mui/material';

import { closeModal, openModal } from '@/lib/store/slices/modal-slice';
import { Icon } from '@/lib/common/icons';
import { SwxButton, SwxTypography } from '@/lib/common/components';
import { SwxModal } from '@/lib/common/layout';

import {
    ModalContainer,
    HeaderContainer,
    BodyContainer,
    StyledNumber,
    StyledProgress,
    StyledTitle,
    StepsContainer,
    StyledStep,
    TitleContainer,
    CloseContainer,
    EllipseContainer,
    styles,
} from './add-employee.styles';
import AddEmployeeStep1 from './AddEmployeeStep1';
import AddEmployeeStep2 from './AddEmployeeStep2';
import AddEmployeeStep3 from './AddEmployeeStep3';
import { clearState } from '@/lib/store/slices/edit-employee-module';
import {
    clearState as clearAddEmployeeState,
    setCertificates,
    setCurrentStep,
    setFacilityUserId,
} from '@/lib/store/slices/add-employee-module';
import { isEmpty } from 'lodash';

export default function AddEmployee() {
    const dispatch = useDispatch();
    const { currentStep, addEmployeeDataStep2, certificates } = useSelector(state => state.addEmployeeModule);

    return (
        <div className='flex items-center mt-0'>
            <SwxButton
                startIcon={<Icon width={14} height={14} name='addition' styles={{ fill: '#FFFFFF' }} />}
                size='medium'
                onClick={e => {
                    e.preventDefault();
                    dispatch(clearState());
                    dispatch(setCertificates(null));
                    dispatch(setFacilityUserId(null));
                    dispatch(openModal({ modalName: 'addEmployeeModal' }));
                }}
                padding='10px 16px'
                variant='contained'
                sx={styles.addEmployeeButton}
                weight='semiBold'>
                Add Employee
            </SwxButton>
            <SwxModal
                modalName='addEmployeeModal'
                onCancel={() => {
                    dispatch(clearState());
                    dispatch(clearAddEmployeeState());
                    dispatch(setCertificates(null));
                    dispatch(setCurrentStep(1));
                }}>
                <ModalContainer>
                    <HeaderContainer>
                        <TitleContainer>
                            <StyledTitle>Add Employee</StyledTitle>
                            <EllipseContainer
                                onClick={() => {
                                    dispatch(closeModal({ modalName: 'addEmployeeModal' }));
                                    dispatch(clearState());
                                    dispatch(clearAddEmployeeState());
                                    dispatch(setCurrentStep(1));
                                }}>
                                <CloseContainer>
                                    <Icon name='ellipse' fill='#F7F8F8' height={30} width={30} />
                                </CloseContainer>
                                <Stack sx={{ position: 'absolute' }}>
                                    <Icon name='close' fill='#838A91' height={10.6} width={10.6} />
                                </Stack>
                            </EllipseContainer>
                        </TitleContainer>
                        <StepsContainer>
                            <StyledStep
                                onClick={() => {
                                    if (currentStep === 2 || currentStep === 3) {
                                        dispatch(setCurrentStep(1));
                                    }
                                }}>
                                <StyledNumber active={currentStep === 1 && true}>1</StyledNumber>
                                <SwxTypography color='swxBlack' size='smallest' weight='thin' className='Manrope'>
                                    Profile Information
                                </SwxTypography>
                            </StyledStep>
                            <StyledStep
                                onClick={() => {
                                    if (currentStep === 3) {
                                        dispatch(setCurrentStep(2));
                                    }
                                    if (!isEmpty(addEmployeeDataStep2) && currentStep === 1) {
                                        dispatch(setCurrentStep(2));
                                    }
                                }}>
                                <StyledNumber active={currentStep === 2 && true}>2</StyledNumber>
                                <SwxTypography color='swxBlack' size='smallest' weight='thin' className='Manrope'>
                                    Personal Document
                                </SwxTypography>
                            </StyledStep>
                            <StyledStep
                                onClick={() => {
                                    if (!isEmpty(certificates) && (currentStep === 1 || currentStep === 2)) {
                                        dispatch(setCurrentStep(3));
                                    }
                                }}>
                                <StyledNumber active={currentStep === 3 && true}>3</StyledNumber>
                                <SwxTypography color='swxBlack' size='smallest' weight='thin' className='Manrope'>
                                    Certifications
                                </SwxTypography>
                            </StyledStep>
                        </StepsContainer>
                    </HeaderContainer>
                    <StyledProgress variant='determinate' value={currentStep * 33.3} />
                    <BodyContainer>
                        {currentStep === 1 && <AddEmployeeStep1 />}
                        {currentStep === 2 && <AddEmployeeStep2 />}
                        {currentStep === 3 && <AddEmployeeStep3 />}
                    </BodyContainer>
                </ModalContainer>
            </SwxModal>
        </div>
    );
}
