'use client';

import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Stack } from '@mui/material';

import { closeModal } from '@/lib/store/slices/modal-slice';
import { Icon } from '@/lib/common/icons';
import { SwxButton, SwxTypography } from '@/lib/common/components';
import { SelectField, Form, FormSubmitButton, TimePickerField } from '@/lib/common/form-components';
import { useEmployees } from '@/hooks/admin-employee';
import { useCertificateOptions } from '@/hooks/certificate';
import { useSpecialityOptions } from '@/hooks/speciality';
import { useFacilityOptions } from '@/hooks/facility';

import { ModalContainer, HeaderContainer, EllipseContainer, CloseContainer, styles } from './add-template-shift.styles';

export default function TemplateShiftForm({ modalName, title, action }) {
    const { templateType } = useSelector(state => state.adminScheduleTemplatesModule);
    const { data: employeesData, isSuccess } = useEmployees(true);
    const { data: certificationOptions } = useCertificateOptions();
    const { data: specialityOptions } = useSpecialityOptions();
    const { data: facilityOptions } = useFacilityOptions();
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
        'None',
        ...employees.map(employee => {
            return { label: employee.name, value: employee.id, avatar: true, groupBy: 'Select Employee' };
        }),
    ];

    const dayProps = {
        label: (
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='semiBold' className='Manrope'>
                Day
            </SwxTypography>
        ),
        options: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        placeholder: '',
        width: '100%',
        required: true,
        padding: '8px 8px',
    };

    const weekProps = {
        label: (
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='semiBold' className='Manrope'>
                Week
            </SwxTypography>
        ),
        options: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
        placeholder: '',
        width: '100%',
        required: true,
        padding: '8px 8px',
    };

    const roleProps = {
        label: (
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='semiBold' className='Manrope'>
                Role
            </SwxTypography>
        ),
        options: certificationOptions,
        placeholder: 'Role',
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

    const employee2Props = {
        label: (
            <SwxTypography color='swxSlightlyBlack' size='semiMedium' weight='semiBold' className='Manrope'>
                Employee 2
            </SwxTypography>
        ),
        options: employeeOptions,
        placeholder: 'Select employee',
        width: '100%',
        padding: '8px 8px',
    };

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
        required: 'Enter station',
        padding: '8px 8px',
        width: '100%',
        options: ['Station 1', 'Station 2', 'Station 3'],
    };

    const onSubmit = shiftData => {
        action({ shiftData });
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
            <Form onSubmit={onSubmit}>
                <Stack direction='column' spacing={2} sx={{ padding: '0px 24px', mt: 1 }}>
                    {templateType[0] === 'Monthly' && (
                        <Stack direction='row' spacing={2}>
                            <SelectField name='week' SWXInputProps={weekProps} />
                        </Stack>
                    )}
                    <Stack direction='row' spacing={2}>
                        <SelectField name='days' SWXInputProps={dayProps} />
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
                        <SelectField name='facility_name' SWXInputProps={stationProps} />
                        <SelectField name='role' SWXInputProps={roleProps} />
                    </Stack>
                    <Stack sx={styles.timePickerStackStyles}>
                        <SelectField name='speciality' SWXInputProps={specialityProps} />
                        <SelectField name='facility' SWXInputProps={facilityProps} />
                    </Stack>
                    <Stack sx={styles.timePickerStackStyles}>
                        <SelectField name='employee' SWXInputProps={employeeProps} />
                        <SelectField name='employee_2' SWXInputProps={employee2Props} />
                    </Stack>
                    <Stack sx={styles.actionButtons} style={{ marginBottom: '24px', marginTop: '30px' }}>
                        <SwxButton onClick={() => dispatch(closeModal({ modalName }))} variant='text' size='medium'>
                            Cancel
                        </SwxButton>
                        <FormSubmitButton variant='contained' buttonName='Submit' />
                    </Stack>
                </Stack>
            </Form>
        </ModalContainer>
    );
}
