// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    snackBar: {
      status: false,
      message: '',
      severity: 'error'
    }
  },
  reducers: {
    setSnackbarStatus: (state, {payload: {status, message, severity}}) => {
      state.snackBar.status = status;
      state.snackBar.message = message;
      state.snackBar.severity = severity
    },

  },
});

export const { setSnackbarStatus } = appSlice.actions;

const reducer = {
  app: appSlice.reducer,
  // other reducers...
};

const store = configureStore({
  reducer: reducer,
});

export default store;