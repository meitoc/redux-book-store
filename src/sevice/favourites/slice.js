import {
    createSlice
} from '@reduxjs/toolkit'

export const favouriteSlice = createSlice({
    name: "favourites",
    initialState: [ 
        ],
    reducers: {
        addToFavourite: (state, action) => {
            const newFavourite = action.payload;
            const index = state.findIndex((favourite) => favourite.id === newFavourite.id);
            console.log("ADDING FAVOURITE", newFavourite);
            if(index!==-1) return state;
            return [...state,newFavourite];
        },
        updateFavourites: (state, action) => {
            const newFavourite=action.payload;
            console.log("UPDATE FAVOURITE", newFavourite);
            if(Array.isArray(newFavourite)) return newFavourite;
            return [];
        },
        removeFavourite: (state, action) => {
            const removedFavourite = action.payload;
            console.log("DELETE FAVOURITE", removedFavourite);
            return state.filter((favourite) => favourite.id !== removedFavourite.id);
        }
    }
})
const { actions } = favouriteSlice
export const { addToFavourite, removeFavourite, updateFavourites } = actions
// export default reducers