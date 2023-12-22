import {PayloadAction, createSlice} from '@reduxjs/toolkit';

interface AuthProps {
  songId: string | undefined;
  isMini: boolean;
}

const initialState: AuthProps = {
  songId: undefined,
  isMini: true,
};

const playerReducer = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setSongId: (
      state,
      action: PayloadAction<{id: string; isMini: boolean}>,
    ) => {
      state.isMini = action.payload.isMini;
      state.songId = action.payload.id;
    },
    setIsMini: (state, action: PayloadAction<{isMini: boolean}>) => {
      state.isMini = action.payload.isMini;
    },
  },
});

export const {setSongId, setIsMini} = playerReducer.actions;
export default playerReducer.reducer;
