import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slice/Slice'

export const store = configureStore({
  reducer: {
    app : counterReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: { warnAfter: 128 },
    serializableCheck: { warnAfter: 128 },
  })
})