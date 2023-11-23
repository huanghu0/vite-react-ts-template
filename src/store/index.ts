import { configureStore } from '@reduxjs/toolkit';
import routerSlice from './routerStore/routerSlice';


const store = configureStore({
  reducer:{
    routerStore:routerSlice
  }
})

// 从 store 本身推断出 `RootState` 和 `AppDispatch` types
type RootState = ReturnType<typeof store.getState>;
// 类型推断: {posts: PostsState, comments: CommentsState, users: UsersState}
type AppDispatch = typeof store.dispatch;

store.subscribe(() => console.log(store.getState(),'store'))

export { store };
export type { RootState, AppDispatch };
