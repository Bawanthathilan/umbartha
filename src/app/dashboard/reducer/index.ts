import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LayoutDataState {
  data: any;
  loading: boolean;
  error: string | null;
  fieldData: any;
}

const initialState: LayoutDataState = {
  data: null,
  loading: false,
  error: null,
  fieldData: null,
};

const dashboardSlice = createSlice({
  name: "dashboardData",
  initialState,
  reducers: {
    // submit new field
    testRequest: (state, action: PayloadAction<any>) => {
      state.loading = true;
      state.error = null;
    },
    testSuccess: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.data = action.payload;
    },
    testFailure: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { testRequest, testSuccess, testFailure } = dashboardSlice.actions;

export default dashboardSlice.reducer;
