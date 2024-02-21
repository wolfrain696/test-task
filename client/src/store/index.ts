import {
  type TypedUseSelectorHook,
  useSelector as useUntypedSelector,
  useDispatch as useUntypedDispatch,
} from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import api from 'store/services/api';

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

const useSelector: TypedUseSelectorHook<RootState> = useUntypedSelector;
const useDispatch: () => AppDispatch = useUntypedDispatch;

export {
  store,
  useSelector,
  useDispatch,
};
