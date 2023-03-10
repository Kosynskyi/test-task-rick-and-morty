import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { characterApi } from './characterSlice';

export const store = configureStore({
  reducer: {
    [characterApi.reducerPath]: characterApi.reducer,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    characterApi.middleware,
  ],
});

setupListeners(store.dispatch);
