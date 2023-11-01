import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    user: {},
    token: ""
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.user = action.payload.user
            state.token = action.payload.token
        },
        logoutSucess: (state, action) => {
            state.user = null; // Đặt userData thành null khi đăng xuất
            state.token = null;
        },
    },
})

export const { loginSuccess, logoutSucess } = userSlice.actions

export default userSlice.reducer