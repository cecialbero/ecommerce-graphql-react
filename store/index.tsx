import { configureStore } from '@reduxjs/toolkit'

import filterReducer from './filter'

const store = configureStore({
    reducer: {
        filter: filterReducer,
    }
})

export default store
