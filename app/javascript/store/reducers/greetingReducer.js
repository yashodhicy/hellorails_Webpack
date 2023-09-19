import { createSlice } from "@reduxjs/toolkit";

const greetingSlice = createSlice({
    name: 'greeting',
    initialState: {
        content: '',
    },
    reducers: {
        setGreeting: (state, action) => {
          state.content = action.payload;
        },
    },
})

export const { setGreeting } = greetingSlice.actions;
export default greetingSlice.reducer;