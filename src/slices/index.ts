import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import auth from './auth';

const reducers = {
  auth,
};

const rootReducer = combineReducers(reducers);

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// export const get = (key: keyof typeof reducers) => (state: RootState) => state[key];
export default store;
