import React, { useState } from 'react';

import { Input } from '../../styles/Form';
import { SearchWrapper, SearchButton } from './Search-style';

const Search = () => {
    const [valueEntered, setValueEntered] = useState<string>('');
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValueEntered(event.target.value);
    }

    return (
        <SearchWrapper>
            <Input
                type='search'
                placeholder='Search'
                name='search'
                onChange={handleOnChange}
            />
            <SearchButton>
                <span className="material-symbols-outlined">
                    search
                </span>
            </SearchButton>
        </SearchWrapper>
    )
}

export default Search