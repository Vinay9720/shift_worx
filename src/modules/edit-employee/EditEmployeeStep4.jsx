'use client';

import { Stack } from '@mui/material';

import { Form } from '../common/form-components';
import { SwxButton, SwxTypography, SwxSelect, SwxInput } from '../common/components';
import { Icon } from '../common/icons';
import { NoteCard } from '../common/layout';
import AddNote from '../add-note';

const notes = [
    {
        title: 'Corinne M',
        sentAt: 'March 01, 2023',
        role: 'Admin',
        description:
            'Welcome to nurseo! We are sp glad you have joined us. Your direct point of contact during your onboarding process is admin user 1234 admin@mail.com. Please do not call the mail number  with question, your onboarding specialist is equipped to answer question you might have!',
    },
    {
        title: 'Corinne M',
        sentAt: 'March 01, 2023',
        role: 'Admin',
        description:
            'Welcome to nurseo! We are sp glad you have joined us. Your direct point of contact during your onboarding process is admin user 1234 admin@mail.com. Please do not call the mail number  with question, your onboarding specialist is equipped to answer question you might have!',
    },
];

function EditEmployeeStep4() {
    // const [isModalOpen, setIsModalOpen] = useState(false);
    // const closeModal = () => setIsModalOpen(false);
    return (
        <Form>
            {/* <Modal open={isModalOpen} onClose={closeModal}>
                <ModalContainer>
                    <HeaderContainer>
                        <StyledTitle>Add Employee</StyledTitle>
                    </HeaderContainer>
                    <BodyContainer>text</BodyContainer>
                </ModalContainer>
            </Modal> */}
            <Stack direction='row' justifyContent='space-between'>
                <Stack direction='row' spacing={2}>
                    <SwxInput
                        type='text'
                        style={{ width: '20rem' }}
                        padding='1rem 0.85rem'
                        placeholder='Search note'
                        startIcon={
                            <Icon
                                styles={{ fill: '#838A91' }}
                                name='search'
                                aria-hidden='true'
                                height={24}
                                width={24}
                            />
                        }
                    />
                    <SwxSelect style={{ width: '10rem' }} />
                    <SwxButton
                        endIcon={<Icon width={17} height={12} name='close' styles={{ fill: '#030303' }} />}
                        size='semiMedium'
                        weight='thin'
                        themecolor='swxBlack'
                        variant='text'>
                        Clear all
                    </SwxButton>
                </Stack>
                <AddNote />
            </Stack>
            <Stack direction='column' spacing={5} sx={{ mt: 7.5 }}>
                <SwxTypography color='swxBlack' size='semiLarge' weight='bold'>
                    Note(s)
                </SwxTypography>
                {notes.map((note, index) => {
                    return <NoteCard key={index} note={note} />;
                })}
            </Stack>
        </Form>
    );
}

export default EditEmployeeStep4;
