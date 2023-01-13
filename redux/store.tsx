import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import basketReducer from './reducers/BasketReducer'
import categoryReducer from './reducers/CategoryReducer'
import productReducer from './reducers/ProductReducer'


const store = configureStore({
  reducer: {
    basket: basketReducer,
    product: productReducer,
    category: categoryReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export default store;