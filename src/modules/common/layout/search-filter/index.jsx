'use client';

import { useState } from 'react';
import styled from 'styled-components';

import { SwxInput, SwxSelect, SwxMultiSelect, SwxButton } from '../../components';
import { Icon } from '../../icons';

const SearchFilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const LeftContent = styled.div`
    display: flex;
    gap: 1rem;
`;

function SearchFilter({ actionButton: ActionButton }) {
    const [multiple, setMultiple] = useState([]);

    const onRoleChange = event => {
        setMultiple(event.target.value);
    };

    return (
        <SearchFilterContainer>
            <LeftContent>
                <SwxInput
                    type='text'
                    style={{ width: '20rem' }}
                    padding='1rem 0.85rem'
                    placeholder='Search name, email, phone...'
                    startIcon={
                        <Icon styles={{ fill: '#838A91' }} name='search' aria-hidden='true' height={24} width={24} />
                    }
                />
                <SwxSelect style={{ width: '10rem' }} />
                <SwxMultiSelect
                    insideLabel='Role(s)'
                    multiple
                    style={{ width: '8rem' }}
                    options={['RN', 'LPN', 'CNA']}
                    value={multiple}
                    onChange={onRoleChange}
                />
                <SwxButton
                    endIcon={<Icon width={17} height={12} name='close' styles={{ fill: '#030303' }} />}
                    size='semiMedium'
                    weight='thin'
                    themecolor='swxBlack'
                    variant='text'>
                    Clear all
                </SwxButton>
            </LeftContent>
            <ActionButton />
        </SearchFilterContainer>
    );
}

export default SearchFilter;
