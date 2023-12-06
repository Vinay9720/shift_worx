'use client';

import { SwxButton } from '@/lib/common/components';
import { FooterContainer } from './schedule-templates.styles';

function ActionButtons() {
    return (
        <FooterContainer>
            <SwxButton onClick={() => null} variant='text' size='medium'>
                Cancel
            </SwxButton>
            <SwxButton variant='contained'>Save</SwxButton>
        </FooterContainer>
    );
}

export default ActionButtons;
