import {configureStore} from '@reduxjs/toolkit';

import favoritesReducer from './favorites';

export const store = configureStore({
  reducer: {
    favoriteMeals: favoritesReducer,
  },
});

export type RootStateType = ReturnType<typeof store.getState>;
