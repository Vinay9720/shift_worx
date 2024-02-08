'use client';

import { Divider, IconButton } from '@mui/material';

import { formatDate } from '@/lib/util';

import { NoteWrapper, NoteLeftContainer, NoteContainer, DescriptionContainer, styles } from './note-card.styles';

import { SwxTypography, SwxChip, SwxPopupMenu } from '../../components/';
import { Icon } from '../../icons';

export default function NoteCard({ note, actions }) {
    return (
        <NoteWrapper isRead={note.read}>
            <NoteContainer isRead={note.read}>
                <NoteLeftContainer>
                    <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                        <SwxTypography color='swxBlack' size='semiLarge' weight='bold' className='Manrope'>
                            {note.note_type.title}
                        </SwxTypography>
                        <span>
                            <SwxChip label='Contractor' color='darkBlue' background='ligherBlue' size='semiMedium' />
                        </span>
                    </div>
                    <div style={{ display: 'flex' }}>
                        <SwxTypography
                            color='swxBlack'
                            size='small'
                            weight='thin'
                            style={{ marginRight: '10px' }}
                            className='Manrope'>
                            {note.entity_type || 'Admin'}
                        </SwxTypography>
                        <div style={{ display: 'flex ', alignItems: 'center', marginRight: '4px' }}>
                            <Icon
                                styles={{ fill: '#E6E8E9' }}
                                name='activity-status'
                                aria-hidden='true'
                                height={6}
                                width={6}
                            />
                            <SwxTypography
                                style={{ marginLeft: '10px' }}
                                color='lightGray'
                                size='small'
                                weight='thin'
                                className='Manrope'>
                                Sent at
                            </SwxTypography>
                        </div>
                        <SwxTypography
                            style={{ marginLeft: '3px' }}
                            color='swxBlack'
                            size='small'
                            weight='thin'
                            className='Manrope'>
                            {formatDate(note.created_at)}
                        </SwxTypography>
                    </div>
                </NoteLeftContainer>
                <Divider orientation='vertical' flexItem sx={styles.vertical} />
                <Divider orientation='horizontal' flexItem sx={styles.horizontal} />
                <DescriptionContainer>
                    <SwxTypography color='swxBlack' size='semiMedium' weight='thin' className='Manrope'>
                        {note.description}
                    </SwxTypography>
                    {actions && (
                        <SwxPopupMenu
                            buttonElement={
                                <IconButton>
                                    <Icon
                                        styles={{ fill: '#838A91' }}
                                        name='vertical-menu'
                                        aria-hidden='true'
                                        height={15}
                                        width={10}
                                    />
                                </IconButton>
                            }
                            options={actions}
                        />
                    )}
                </DescriptionContainer>
            </NoteContainer>
        </NoteWrapper>
    );
}
