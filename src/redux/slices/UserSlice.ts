import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// this is just an example of user state that could possibly be in your app

interface UserState {
    name: string;
    email: string;
    loggedIn: boolean;
}

const initialState: UserState = {
    name: '',
    email: '',
    loggedIn: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserState>) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.loggedIn = action.payload.loggedIn;
        },
        UpdateUser : (state, action: PayloadAction<Partial<UserState>>) => {
            Object.assign(state, action.payload);
        }
    },  
});

export const { setUser, UpdateUser } = userSlice.actions;

export default userSlice.reducer;