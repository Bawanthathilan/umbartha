import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LayoutDataState {
  loading?: boolean;
  stepCount: number;
  counsellorList: any;
  counsellorListError?: any;
  selectedCounsellorId?: any;
  selectedCounsellorProfileData?: any;
  selectedCounsellorMeetingData?: any;
  selectedCounsellorMeetingDataError?: any;
}

const initialState: LayoutDataState = {
  loading: false,
  stepCount: 0,
  counsellorList: [],
  counsellorListError: null,
  selectedCounsellorId: null,
  selectedCounsellorMeetingData: [],
  selectedCounsellorMeetingDataError: null,
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
      state.loading = true;
      state.counsellorListError = null;
      state.selectedCounsellorId = null;
      state.selectedCounsellorProfileData = null;
      state.selectedCounsellorMeetingData = [];
    },
    getCounsellorListSuccess: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.counsellorList = action.payload;
    },
    getCounsellorListFailure: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.counsellorListError = action.payload;
    },
    // set selected counsellor id
    setSelectedCounsellorProfileData: (state, action: PayloadAction<any>) => {
      console.log("action.payload", action.payload);
      const { _id } = action.payload;
      state.selectedCounsellorId = _id;
      state.selectedCounsellorProfileData = action.payload;
    },
    // get meeting data by counsellor id
    getMeetingDataByCounsellorIdRequest: (
      state,
      action: PayloadAction<any>
    ) => {
      state.loading = true;
      state.selectedCounsellorMeetingDataError = null;
      state.selectedCounsellorMeetingData = [];
    },
    getMeetingDataByCounsellorIdSuccess: (
      state,
      action: PayloadAction<any>
    ) => {
      state.loading = false;
      state.selectedCounsellorMeetingData = action.payload;
    },
    getMeetingDataByCounsellorIdFailure: (
      state,
      action: PayloadAction<any>
    ) => {
      state.loading = false;
      state.selectedCounsellorMeetingDataError = action.payload;
      state.selectedCounsellorMeetingData = [];
    },
  },
});

export const {
  stepCountDecrease,
  stepCountIncrease,
  getCounsellorListRequest,
  getCounsellorListSuccess,
  getCounsellorListFailure,
  setSelectedCounsellorProfileData,
  getMeetingDataByCounsellorIdRequest,
  getMeetingDataByCounsellorIdSuccess,
  getMeetingDataByCounsellorIdFailure,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;
