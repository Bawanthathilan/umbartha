import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LayoutDataState {
  stepCount: number;
  counsellorList: any;
  counsellorListLoading?: boolean;
  counsellorListError?: any;
}

const initialState: LayoutDataState = {
  stepCount: 0,
  counsellorList: [],
  counsellorListLoading: false,
  counsellorListError: null,
};

const dashboardSlice = createSlice({
  name: "dashboardData",
  initialState,
  reducers: {
    // stepper
    stepCountIncrease: (state, action: PayloadAction<any>) => {
      state.stepCount = action.payload;
    },

    stepCountDecrease: (state, action: PayloadAction<any>) => {
      state.stepCount = action.payload;
    },
    // get counsellor list
    getCounsellorListRequest: (state) => {
      state.counsellorListLoading = true;
      state.counsellorListError = null;
    },
    getCounsellorListSuccess: (state, action: PayloadAction<any>) => {
      state.counsellorListLoading = false;
      state.counsellorList = action.payload;
    },
    getCounsellorListFailure: (state, action: PayloadAction<any>) => {
      state.counsellorListLoading = false;
      state.counsellorListError = action.payload;
    },
  },
});

export const {
  stepCountDecrease,
  stepCountIncrease,
  getCounsellorListRequest,
  getCounsellorListSuccess,
  getCounsellorListFailure,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;
