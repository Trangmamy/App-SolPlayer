import {combineReducers, configureStore} from '@reduxjs/toolkit';
import AuthReducer from './reducers/auth';
import PlayerReducer from './reducers/player';

const rootReducer = combineReducers({
  auth: AuthReducer,
  player: PlayerReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
