import { createSlice } from '@reduxjs/toolkit'

import { filterType } from '../model'

const initialFilterState: filterType = {
    term: ''
};

const filterSlice = createSlice({
    name: 'filter',
    initialState: initialFilterState,
    reducers: {
        getFilterTerm(state, action) {
            state.term = action.payload;
        }
    }
});

export const filterActions = filterSlice.actions

export default filterSlice.reducer
