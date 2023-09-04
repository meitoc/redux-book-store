import {
    createSlice
} from '@reduxjs/toolkit'

export const bookSlice = createSlice({
    name: "books",
    initialState: [
    ],
    reducers: {
        updateBooks: (state, action)=>{
            if(Array.isArray(action.payload)) return action.payload;
            return [];
        }
    }
})
const { actions } = bookSlice
export const { updateBooks } = actions
