import { configureStore } from '@reduxjs/toolkit'
import { bookSlice } from './books/slice'
import { favouriteSlice } from './favourites/slice'


const store = configureStore({
    reducer: {
        books: bookSlice.reducer,
        favourites: favouriteSlice.reducer
    },
})

export default store