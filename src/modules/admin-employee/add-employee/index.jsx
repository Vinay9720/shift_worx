'use client';

import { useSelector, useDispatch } from 'react-redux';

import { openModal } from '@/lib/store/slices/modal-slice';
import { setCurrentStep } from '@/lib/store/slices/add-employee-module';
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
} from './add-employee.styles';
import AddEmployeeStep1 from './AddEmployeeStep1';
import AddEmployeeStep2 from './AddEmployeeStep2';
import AddEmployeeStep3 from './AddEmployeeStep3';

export default function AddEmployee() {
    const dispatch = useDispatch();
    // const { isOpen } = useSelector(state => state.modal);
    const { currentStep } = useSelector(state => state.addEmployeeModule);

    return (
        <div className='flex items-center mt-0'>
            <SwxButton
                startIcon={<Icon width={17} height={12} name='addition' styles={{ fill: '#FFFFFF' }} />}
                size='small'
                onClick={e => {
                    e.preventDefault();
                    dispatch(openModal({ modalName: 'addEmployeeModal' }));
                }}
                padding='10px 16px'
                variant='contained'
                weight='semiBold'>
                Add Employee
            </SwxButton>
            <SwxModal modalName='addEmployeeModal'>
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
                        {currentStep === 1 && <AddEmployeeStep1 />}
                        {currentStep === 2 && <AddEmployeeStep2 />}
                        {currentStep === 3 && <AddEmployeeStep3 />}
                    </BodyContainer>
                </ModalContainer>
            </SwxModal>
        </div>
    );
}
