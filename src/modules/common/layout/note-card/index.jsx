'use client';

import { Divider } from '@mui/material';

import { NoteWrapper, NoteLeftContainer, NoteContainer } from './note-card.styles';

import { SwxTypography, SwxChip } from '../../components';
import { Icon } from '../../icons';

export default function NoteCard({ note }) {
    return (
        <NoteWrapper>
            <NoteContainer>
                <NoteLeftContainer>
                    <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                        <SwxTypography color='swxBlack' size='semiLarge' weight='bold'>
                            {note.title}
                        </SwxTypography>
                        <span>
                            <SwxChip label='Contractor' color='darkBlue' background='ligherBlue' size='semiMedium' />
                        </span>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <SwxTypography color='swxBlack' size='small' weight='thin' style={{ marginRight: '10px' }}>
                            {note.role}
                        </SwxTypography>
                        <div style={{ display: 'flex ', alignItems: 'center' }}>
                            <Icon
                                styles={{ fill: '#E6E8E9' }}
                                name='activity-status'
                                aria-hidden='true'
                                height={6}
                                width={6}
                            />
                            <SwxTypography style={{ marginLeft: '10px' }} color='lightGray' size='small' weight='thin'>
                                Sent at
                            </SwxTypography>
                        </div>
                        <SwxTypography style={{ marginLeft: '3px' }} color='swxBlack' size='small' weight='thin'>
                            {note.sentAt}
                        </SwxTypography>
                    </div>
                </NoteLeftContainer>
                <Divider orientation='vertical' flexItem />
                <SwxTypography color='swxBlack' size='semiMedium' weight='thin'>
                    {note.description}
                </SwxTypography>
            </NoteContainer>
        </NoteWrapper>
    );
}
