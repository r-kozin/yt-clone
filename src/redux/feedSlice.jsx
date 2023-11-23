import { createSlice } from '@reduxjs/toolkit';

// const fetchVideos = async () => {
//     const response = await fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=react&key=AIzaSyD-8QGp6jQj6Qx4z4LjK0f9qV8n1JwJ8hQ');
//     const json = await response.json();
//     return json;
// }


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