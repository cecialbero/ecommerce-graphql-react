import React, { useState } from 'react';

import { Input } from '../../styles/Form';
import { SearchWrapper, SearchButton } from './Search-style';

type SearchProps = {
    onSearch: any
}

const Search = ({onSearch}: SearchProps) => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const handleOnChange = ({target}: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(target.value.toLowerCase());
    }

    const handleOnSearch = (e: any) => {
        if (e.keyCode === 13 || e.type === 'click') {
            onSearch(searchTerm);
        }
    }

    return (
        <SearchWrapper>
            <Input
                type='search'
                placeholder='Search'
                onChange={handleOnChange}
                onKeyDown={handleOnSearch}
            />
            <SearchButton onClick={handleOnSearch}>
                <span className="material-symbols-outlined">
                    search
                </span>
            </SearchButton>
        </SearchWrapper>
    )
}

export default Search