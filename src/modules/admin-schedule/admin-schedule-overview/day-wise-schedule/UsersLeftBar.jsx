import { OpenShifts } from '@/lib/common/layout';
import {
    StyledAvatarGridContainer,
    StyledCalenderDiv,
    StyledDotDiv,
    StyledEmployeeName,
    // StyledFlexDiv,
    StyledFlexRow,
    StyledGridSubDiv,
    StyledMarginDiv,
    StyledNameFlexContainer,
    StyledShiftLengthDiv,
    // StyledSubFlexDiv,
    StyledTimeDiv,
    StyledUsersLeftBar,
    StyledViewUsersDiv,
} from './day-wise-schedule.styles';
import { Avatar } from '@mui/material';
import Icon from 'react-multi-date-picker/components/icon';

export const UsersLeftBar = ({ data }) => {
    return (
        <StyledUsersLeftBar>
            <StyledViewUsersDiv>View by Users</StyledViewUsersDiv>
            <StyledGridSubDiv>
                {data.map((emp, i) => {
                    const height = emp.shifts.length * 74;
                    const showTopBorder = !!(data[i - 1]?.name || false);
                    if (!emp.name) return <OpenShifts key={i} height={height} scheduleType='daily' />;
                    return (
                        <StyledAvatarGridContainer key={i} height={height} showTopBorder={showTopBorder}>
                            <div className='row-span-2'>
                                <Avatar sx={{ width: 42, height: 42, bgcolor: '#1F6FA9' }}>{`${emp.name
                                    .split('')[0]
                                    .toUpperCase()}`}</Avatar>
                            </div>
                            <StyledNameFlexContainer>
                                <StyledEmployeeName>
                                    {`${emp.name.slice(0, 7)} ${emp.name.slice(7, 8).toUpperCase()}`}
                                </StyledEmployeeName>

                                <StyledFlexRow>
                                    <StyledMarginDiv>
                                        <Icon
                                            styles={{ fill: '#838A91' }}
                                            name='clock'
                                            aria-hidden='true'
                                            height={16}
                                            width={16}
                                        />
                                    </StyledMarginDiv>
                                    <StyledTimeDiv>{emp.shifts[0].planned}</StyledTimeDiv>
                                    <StyledDotDiv />
                                    <StyledCalenderDiv>
                                        <Icon
                                            styles={{ fill: '#838A91' }}
                                            name='calender'
                                            aria-hidden='true'
                                            height={16}
                                            width={16}
                                        />
                                    </StyledCalenderDiv>
                                    <StyledShiftLengthDiv>{emp.shifts.length || 1}</StyledShiftLengthDiv>
                                </StyledFlexRow>
                            </StyledNameFlexContainer>
                        </StyledAvatarGridContainer>
                    );
                })}
            </StyledGridSubDiv>
        </StyledUsersLeftBar>
    );
};
