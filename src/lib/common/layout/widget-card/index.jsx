'use client';

import {
    CardWrapper,
    CardContainer,
    PillContainer,
    StyledText,
    UpperContainer,
    LowerContainer,
    StyledH1,
    StyledTitle,
    StyledTopRightSlot,
} from './widget-card.styles';

import { Icon } from '../../icons';

function WidgetCard({ iconName, badgeArrow, percentage, totalCount, title }) {
    return (
        <CardWrapper>
            <CardContainer>
                <UpperContainer>
                    <Icon name={iconName} width={24} height={24} fill='white' />
                    <StyledTopRightSlot>
                        <PillContainer color={`${badgeArrow === 'down-arrow' ? 'lightRed' : 'lightGreen'}`}>
                            <Icon
                                styles='fill-darkGray'
                                name={badgeArrow === 'down-arrow' ? 'arrow-down' : 'arrow-right'}
                                aria-hidden='true'
                                height={33}
                                width={20}
                            />
                        </PillContainer>
                        <StyledText style={{ marginLeft: '10px' }} color='mediumGreen' weight='600'>
                            {percentage}
                        </StyledText>
                        <StyledText style={{ marginLeft: '4px' }}>vs last 30 days</StyledText>
                    </StyledTopRightSlot>
                </UpperContainer>
                <LowerContainer>
                    <StyledH1>{totalCount}</StyledH1>
                    <StyledTitle size='1rem'>{title}</StyledTitle>
                </LowerContainer>
            </CardContainer>
        </CardWrapper>
    );
}

export default WidgetCard;
