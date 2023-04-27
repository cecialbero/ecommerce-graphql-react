import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { filterActions } from '../../store/filter'
import { Input } from '../../styles/Form'
import { SearchWrapper, SearchButton } from './Search-style'

const Search = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const dispatch = useDispatch();

    const handleOnChange = ({target}: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(target.value.toLowerCase());
    }

    const handleOnSearch = (e: any) => {
        if (e.keyCode === 13 || e.type === 'click') {
            dispatch(filterActions.getFilterTerm(searchTerm));
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

export default React.memo(Search)