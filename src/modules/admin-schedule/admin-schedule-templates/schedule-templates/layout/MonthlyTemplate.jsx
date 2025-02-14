'use client';

import moment from 'moment';
import { useDispatch } from 'react-redux';
import { IconButton } from '@mui/material';

import { Badge } from '@/lib/common/layout/daily-schedule-banner';
import { SwxPopupMenu, SwxChip, SwxPopover } from '@/lib/common/components';
import { Icon } from '@/lib/common/icons';
import {
    DayContainer,
    DaysConatiner,
    EmployeeNameContainer,
    ScheduleBannerContainer,
    ScheduleBannerWrapper,
    ShowMoreButtonWrapper,
    StyledBorderContainer,
    StyledRootMainContainer,
    StyledShowMoreButton,
    TimeContainer,
    WeekDayContainer,
    MonthlyWeekDaysContainer,
    MenuContainer,
    StyledMoreShiftsContainer,
} from './schedule-templates.styles';
import { SwxModal, DynamicPromptModal } from '@/lib/common/layout';
import { openModal } from '@/lib/store/slices/modal-slice';
import TemplateShiftForm from '../add-template-shift/TemplateShiftForm';
import { useDeleteTemplateShift } from '@/hooks/admin-schedule-templates/useDeleteTemplateShift';
import {
    setTemplateShiftTobeDeleted,
    setTemplateShiftTobeEdited,
} from '@/lib/store/slices/admin-schedule-templates-module';
import { useEditTemplateShift } from '@/hooks/admin-schedule-templates/useEditTemplateShift';
import { certificateBackground } from '@/lib/util/dynamicChipColor';

export default function MonthlyTemplate({ templateShifts = [] }) {
    const dispatch = useDispatch();
    const { mutate: deleteShift, isLoading: deleteLoadingState } = useDeleteTemplateShift();
    const { mutate: updateShift, isLoading } = useEditTemplateShift();
    const fixedWeekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const getMonthDays = () => {
        const monthDays = [];

        let weekCounter = 1;
        let dayCounter = 1;

        for (let day = 1; day <= 35; day++) {
            const dayName = getDayName(dayCounter);
            const startingColumn = day === 1 ? ((dayCounter - 1) % 7) + 1 : 'unset';

            const dayOfMonth = {
                dayName,
                startingColumn,
                isFromCurrentMonth: true,
                week: weekCounter,
            };

            monthDays.push(dayOfMonth);

            if (dayCounter % 7 === 0) {
                weekCounter++;
            }

            dayCounter++;
        }

        return monthDays;
    };

    const getDayName = dayCounter => {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return daysOfWeek[(dayCounter - 1) % 7];
    };

    const monthDays = getMonthDays();

    const menuOptions = shiftData => {
        return [
            {
                label: 'Edit Shift',
                action: () => {
                    dispatch(setTemplateShiftTobeEdited(shiftData));
                    dispatch(openModal({ modalName: 'editTemplateShiftModal' }));
                },
                icon: <Icon styles={{ fill: '#838A91' }} name='pencil' height={14} width={14} />,
            },
            {
                label: 'Delete Shift',
                action: () => {
                    dispatch(setTemplateShiftTobeDeleted(shiftData));
                    dispatch(openModal({ modalName: 'deleteTemplateShiftModal' }));
                },
                color: 'red',
                icon: <Icon styles={{ fill: '#F43C02' }} name='trash' height={14} width={14} />,
            },
        ];
    };

    const renderShift = (shift, key) => {
        return (
            <ScheduleBannerWrapper key={key}>
                <Badge
                    text={getScheduleBanner(
                        shift.nurse_name,
                        shift.certificate.abbreviation || 'RN',
                        shift.start_time,
                        shift.end_time,
                        shift.session || 'Morning',
                        shift.location || 'First Floor',
                        shift.id,
                        shift.nurse_id,
                        shift.day,
                        shift.certificate.id,
                        shift.speciality,
                        shift.facility,
                        shift.week
                    )}
                    kind={
                        shift.certificate.abbreviation === 'RN'
                            ? 'scheduleOrange'
                            : shift.certificate.abbreviation === 'LPN'
                            ? 'scheduleCyan'
                            : shift.certificate.abbreviation === 'CNA'
                            ? 'scheduleMistyRose'
                            : 'scheduleOrange'
                    }
                    styles={{
                        padding: '4px',
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: !shift.nurse_name ? '#E9E9EC' : null,
                        border: !shift.nurse_name ? '1.5px solid #F47602' : null,
                    }}
                />
            </ScheduleBannerWrapper>
        );
    };

    const getScheduleBanner = (
        empName,
        cert,
        start,
        end,
        session,
        station,
        id,
        nurseId,
        day,
        certId,
        speciality,
        facility,
        week
    ) => {
        const timeStartInput = start;
        const timeEndInput = end;
        const parsedStartTime = moment(timeStartInput, 'h:mma');
        const parsedEndTime = moment(timeEndInput, 'h:mma');
        const outputStartTime = parsedStartTime.format('hha');
        const outputEndTime = parsedEndTime.format('hha');
        const shiftData = {
            week,
            employee: empName,
            facility_id: facility,
            id,
            certificate_ids: certId,
            speciality_ids: speciality,
            station,
            start_time: start,
            end_time: end,
            role: cert,
            day,
            template_type: 'monthly',
            nurseId,
        };
        return (
            <ScheduleBannerContainer>
                <TimeContainer>
                    {outputStartTime} {`>`} {outputEndTime}
                </TimeContainer>
                <EmployeeNameContainer>{empName ? empName.substring(0, 5) : 'Open'}</EmployeeNameContainer>
                <MenuContainer>
                    <SwxChip label={cert} color='white' background={certificateBackground(cert)} size='smallest' />
                    <div>
                        <SwxPopupMenu
                            buttonElement={
                                <IconButton sx={{ height: '10px' }}>
                                    <Icon
                                        styles={{ fill: '#838A91' }}
                                        name='vertical-menu'
                                        aria-hidden='true'
                                        height={10}
                                        width={4}
                                    />
                                </IconButton>
                            }
                            from='month wise'
                            options={menuOptions(shiftData)}
                        />
                    </div>
                </MenuContainer>
            </ScheduleBannerContainer>
        );
    };

    return (
        <StyledRootMainContainer>
            <StyledBorderContainer>
                <MonthlyWeekDaysContainer>
                    {fixedWeekDays.map((weekDay, index) => (
                        <WeekDayContainer key={index}>
                            <p style={{ marginLeft: '12px' }}>{weekDay}</p>
                        </WeekDayContainer>
                    ))}
                </MonthlyWeekDaysContainer>
                <DaysConatiner>
                    {monthDays.map((day, i) => {
                        let noOfShifts = 0;
                        const shiftsToShow = [];
                        const remainingShifts = [];
                        return (
                            <DayContainer style={{ gridColumnStart: `${day.startingColumn}` }} key={i}>
                                {templateShifts.map((shift, key) => {
                                    if (shift.day === day.dayName && shift.week === day.week) {
                                        noOfShifts += 1;
                                        if (noOfShifts <= 3) {
                                            shiftsToShow.push(renderShift(shift, key));
                                        } else {
                                            remainingShifts.push(renderShift(shift, key));
                                        }
                                    }
                                    return null;
                                })}
                                {shiftsToShow}
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    {noOfShifts > 3 && (
                                        <SwxPopover
                                            buttonElement={
                                                <ShowMoreButtonWrapper>
                                                    <StyledShowMoreButton>
                                                        {`View ${noOfShifts - 3}`} More&nbsp;
                                                    </StyledShowMoreButton>
                                                </ShowMoreButtonWrapper>
                                            }
                                            content={
                                                <StyledMoreShiftsContainer>{remainingShifts}</StyledMoreShiftsContainer>
                                            }
                                        />
                                    )}
                                </div>
                            </DayContainer>
                        );
                    })}
                </DaysConatiner>
            </StyledBorderContainer>
            <DynamicPromptModal
                loading={deleteLoadingState}
                modalName='deleteTemplateShiftModal'
                entityName='Shift'
                onConfirm={() => deleteShift()}
            />
            <SwxModal modalName='editTemplateShiftModal' onCancel={() => dispatch(setTemplateShiftTobeEdited(null))}>
                <TemplateShiftForm
                    onCancel={() => dispatch(setTemplateShiftTobeEdited(null))}
                    modalName='editTemplateShiftModal'
                    title='Edit'
                    loading={isLoading}
                    action={updateShift}
                />
            </SwxModal>
        </StyledRootMainContainer>
    );
}
