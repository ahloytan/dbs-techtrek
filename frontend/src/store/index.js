// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    snackBar: {
      status: false,
      message: '',
      severity: 'error',
    },
    isLoading: false
  },
  reducers: {
    setSnackbarStatus: (state, {payload: {status, message, severity}}) => {
      state.snackBar.status = status;
      state.snackBar.message = message;
      state.snackBar.severity = severity
    },
    setLoadingStatus: (state, {payload}) => {
      state.isLoading = payload;
    }
  },
});

export const { setSnackbarStatus, setLoadingStatus } = appSlice.actions;

const reducer = {
  app: appSlice.reducer,
  // other reducers...
};

const store = configureStore({
  reducer: reducer,
});

export default store;