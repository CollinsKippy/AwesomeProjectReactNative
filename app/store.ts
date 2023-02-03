import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import albumReducer from '../features/albums/albumSlice';

export const store = configureStore({
  reducer: {
    album: albumReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
