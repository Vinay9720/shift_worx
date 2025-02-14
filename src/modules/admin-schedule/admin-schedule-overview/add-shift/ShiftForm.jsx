'use client';

import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Stack } from '@mui/material';

import { closeModal } from '@/lib/store/slices/modal-slice';
import { Icon } from '@/lib/common/icons';
import { SwxButton, SwxTypography } from '@/lib/common/components';
import {
    DatePickerField,
    SelectField,
    Form,
    FormSubmitButton,
    TimePickerField,
    InputField,
} from '@/lib/common/form-components';
import { useEmployees } from '@/hooks/admin-employee';
import { useCertificateOptions } from '@/hooks/certificate';
import { useSpecialityOptions } from '@/hooks/speciality';
import { useFacilityOptions } from '@/hooks/facility';

import { ModalContainer, HeaderContainer, EllipseContainer, CloseContainer, styles } from './add-shift.styles';
import { today } from '@/lib/util';

export default function ShiftForm({ modalName, title, action: addShift, loading, onCancel }) {
    const { data: employeesData, isSuccess } = useEmployees(true);
    const { data: certificationOptions } = useCertificateOptions();
    const { data: specialityOptions } = useSpecialityOptions();
    const { data: facilityOptions } = useFacilityOptions();
    const { shiftEditModalData } = useSelector(state => state.adminScheduleModule);
    const dispatch = useDispatch();

    const employees = useMemo(() => {
        if (isSuccess) {
            return (employeesData.employees || []).map(employee => {
                return { name: employee.user.first_name, id: employee.user.profileable_id };
            });
        }
        return [];
    }, [employeesData]);

    const employeeOptions = [
        'Leave Open',
        ...employees.map(employee => {
            return { label: employee.name, value: employee.id, avatar: true, groupBy: 'Select Employee' };
        }),
    ];

    const dateProps = {
        label: (
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='semiBold' className='Manrope'>
                Date
            </SwxTypography>
        ),
        multiple: true,
        width: '100%',
        required: true,
        range: false,
        minDate: today(),
    };

    const roleProps = {
        label: (
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='semiBold' className='Manrope'>
                Certification
            </SwxTypography>
        ),
        options: certificationOptions,
        placeholder: 'Certification',
        width: '100%',
        required: true,
        padding: '8px 8px',
    };

    const specialityProps = {
        label: (
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='semiBold' className='Manrope'>
                Speciality
            </SwxTypography>
        ),
        options: specialityOptions,
        placeholder: 'Speciality',
        width: '100%',
        required: true,
        padding: '8px 8px',
    };

    const facilityProps = {
        label: (
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='semiBold' className='Manrope'>
                Facility
            </SwxTypography>
        ),
        options: facilityOptions,
        placeholder: 'Facility',
        width: '100%',
        required: true,
        padding: '8px 8px',
    };

    const employeeProps = {
        label: (
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='semiBold' className='Manrope'>
                Employee
            </SwxTypography>
        ),
        options: employeeOptions,
        placeholder: 'Select employee',
        width: '100%',
        // required: true,
        padding: '8px 8px',
    };

    // const employee2Props = {
    //     label: (
    //         <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='semiBold' className='Manrope'>
    //             Employee 2
    //         </SwxTypography>
    //     ),
    //     options: employeeOptions,
    //     placeholder: 'Select employee',
    //     width: '100%',
    //     padding: '8px 8px',
    // };

    const startTimeProps = {
        label: (
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='semiBold' className='Manrope'>
                Time Start
            </SwxTypography>
        ),
        placeholder: 'time',
        width: '100%',
        required: true,
        padding: '8px 8px',
    };

    const endTimeProps = {
        label: (
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='semiBold' className='Manrope'>
                Time End
            </SwxTypography>
        ),
        placeholder: 'time',
        width: '100%',
        required: true,
        padding: '8px 8px',
    };

    const stationProps = {
        label: (
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='semiBold' className='Manrope'>
                Location/Station
            </SwxTypography>
        ),
        placeholder: 'Station',
        // placeholderColor: 'lightGray',
        required: 'Enter station',
        padding: '8px 8px',
        width: '100%',
        options: ['Station 1', 'Station 2', 'Station 3'],
    };
    const SpecialInstructionsProps = {
        label: (
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='semiBold' className='Manrope'>
                Special Instructions / Notes
            </SwxTypography>
        ),
        placeholder: '',
        required: 'Write your Instructions',
        multiline: true,
        padding: '0px',
        // rows: 4,
        style: { gap: '1px' },
    };

    return (
        <ModalContainer>
            <HeaderContainer>
                <SwxTypography color='swxBlack' size='large' weight='bold'>
                    {title || 'Add'} Shift
                </SwxTypography>
                <EllipseContainer onClick={() => dispatch(closeModal({ modalName }))}>
                    <CloseContainer>
                        <Icon name='ellipse' fill='#F7F8F8' height={30} width={30} />
                    </CloseContainer>
                    <Stack sx={{ position: 'absolute' }}>
                        <Icon name='close' fill='#838A91' height={10.6} width={10.6} />
                    </Stack>
                </EllipseContainer>
            </HeaderContainer>
            <Form onSubmit={shiftData => addShift({ shiftData })} defaultValues={shiftEditModalData}>
                <Stack direction='column' spacing={2} sx={{ padding: '0px 24px', mt: 1 }}>
                    <Stack direction='row' spacing={2}>
                        <DatePickerField name='date' SWXInputProps={dateProps} />
                    </Stack>
                    <Stack sx={styles.timePickerStackStyles}>
                        <Stack sx={styles.timePicker}>
                            <TimePickerField name='start_time' SWXInputProps={startTimeProps} />
                        </Stack>
                        <Stack sx={styles.timePicker}>
                            <TimePickerField name='end_time' SWXInputProps={endTimeProps} />
                        </Stack>
                    </Stack>
                    <Stack sx={styles.timePickerStackStyles}>
                        {/* <InputField name='facility_name' SWXInputProps={stationProps} /> */}
                        <SelectField name='facility_name' SWXInputProps={stationProps} />
                        <SelectField name='role' SWXInputProps={roleProps} />
                    </Stack>
                    <Stack sx={styles.timePickerStackStyles}>
                        <SelectField name='speciality' SWXInputProps={specialityProps} />
                        <SelectField name='facility' SWXInputProps={facilityProps} />
                    </Stack>
                    <Stack sx={styles.timePickerStackStyles}>
                        <SelectField name='employee' SWXInputProps={employeeProps} />
                        {/* <SelectField name='employee_2' SWXInputProps={employee2Props} /> */}
                    </Stack>
                    <Stack direction={{ xs: 'column', sm: 'row' }}>
                        <InputField name='description' SWXInputProps={SpecialInstructionsProps} />
                    </Stack>
                    <Stack sx={styles.actionButtons} style={{ marginBottom: '24px', marginTop: '30px' }}>
                        <SwxButton
                            onClick={() => {
                                dispatch(closeModal({ modalName }));
                                if (onCancel) {
                                    onCancel();
                                }
                            }}
                            variant='text'
                            size='medium'>
                            Cancel
                        </SwxButton>
                        <FormSubmitButton variant='contained' buttonName='Submit' loading={loading} />
                    </Stack>
                </Stack>
            </Form>
        </ModalContainer>
    );
}
