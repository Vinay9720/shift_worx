'use client';

import { useDispatch, useSelector } from 'react-redux';

import { Form, InputField, DatePickerField, FormSubmitButton } from '@/components/form-components';
import { showToast } from '@/lib/utils';
import { Hr, SwxButton } from '@/components/common';
import { addEmployee } from '@/redux/actions/thunks/employees';

import { HeadingsContainer, RowContainer, StyledText, StyledLabel, FooterContainer } from './AddEmployee.styles';

function AddEmployeeStep2({ setCurrentStep, setIsModalOpen }) {
    const dispatch = useDispatch();
    const { employee } = useSelector(state => state.employees);

    const ssnProps = {
        label: (
            <StyledLabel color='swxSlightlyBlack' size='semiMedium' weight='semiBold'>
                SSN#
            </StyledLabel>
        ),
        placeholder: 'xxx-xxx-xxx',
        type: 'number',
        required: 'Enter ssn',
    };

    const driverLicenseProps = {
        label: (
            <StyledLabel color='swxSlightlyBlack' size='semiMedium' weight='semiBold'>
                Driver&apos;s License #
            </StyledLabel>
        ),
        placeholder: 'xxx-xxx-xxx',
        type: 'number',
        required: 'Enter driver license number',
    };

    const driverLicenseIssueProps = {
        label: (
            <StyledLabel color='swxSlightlyBlack' size='semiMedium' weight='semiBold'>
                Driver&apos;s License Issue date
            </StyledLabel>
        ),
        required: true,
    };

    const driverLicenseExpireProps = {
        label: (
            <StyledLabel color='swxSlightlyBlack' size='semiMedium' weight='semiBold'>
                Driver&apos;s License Expiration Date
            </StyledLabel>
        ),
        required: true,
    };

    const onSubmit = userData => {
        const profileableAttributes = {
            profileable_attributes: {
                facility_id: 1,
            },
            profileable_type: 'Nurse',
        };
        dispatch(
            addEmployee({
                employee: {
                    user: { ...userData, ...profileableAttributes },
                    step: 'personal_documents',
                    facility_user_id: employee.id,
                },
            })
        ).then(res => {
            if (res.payload && res.payload.facility_user) {
                setCurrentStep(3);
            } else {
                showToast('error', 'Please try again later.');
                setIsModalOpen(false);
            }
        });
    };

    return (
        <>
            <HeadingsContainer>
                <StyledText color='swxBlack' size='semiLarge' weight='bold'>
                    Personal Documents
                </StyledText>
                <StyledText color='lightGray' size='small' weight='thin'>
                    Upload employee personal documents
                </StyledText>
            </HeadingsContainer>
            <Form onSubmit={onSubmit} styles='flex flex-col gap-y-5'>
                <RowContainer>
                    <InputField name='ssn' SWXInputProps={ssnProps} />
                </RowContainer>
                <RowContainer>
                    <InputField name='dl_number' SWXInputProps={driverLicenseProps} />
                </RowContainer>
                <Hr />
                <RowContainer>
                    <DatePickerField name='dl_issue_date' SWXInputProps={driverLicenseIssueProps} />
                    <DatePickerField name='dl_expiration_date' SWXInputProps={driverLicenseExpireProps} />
                </RowContainer>
                {/* {footer} */}
                <FooterContainer>
                    <SwxButton variant='text'>Cancel</SwxButton>
                    <FormSubmitButton variant='contained' buttonName='Next' />
                </FooterContainer>
            </Form>
        </>
    );
}

export default AddEmployeeStep2;
