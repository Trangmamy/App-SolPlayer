import {PayloadAction, createSlice} from '@reduxjs/toolkit';

interface AuthProps {
  isLogin: boolean;
}

const initialState: AuthProps = {
  isLogin: false,
};

const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsLogin: (state, action: PayloadAction<{isLogin: boolean}>) => {
      state.isLogin = action.payload.isLogin;
    },
  },
});

export const {setIsLogin} = authReducer.actions;
export default authReducer.reducer;
