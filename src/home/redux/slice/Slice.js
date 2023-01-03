import { createSlice } from "@reduxjs/toolkit"
import { combineState } from "../state"

const initialState = {
  ...combineState
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    hidenav: (state, navInput) => {
      const { payload } = navInput
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.hideNavbar = payload
    },
    showToast: (state, toastInput) => {
      const { payload } = toastInput
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.toast = payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { hidenav, showToast } = counterSlice.actions

export default counterSlice.reducer