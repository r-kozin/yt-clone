import { createSlice } from '@reduxjs/toolkit';


const feedSlice = createSlice({
    name: 'feed',
    initialState: {
        data: [],
    },
    reducers: {
        updateData: state => {
            state.data = state.data // TODO: update data, add extra reducer for api call to youtube api
        },
    },
});

export const { updateData } = feedSlice.actions;
export default feedSlice.reducer;