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
  otpSentLoading?: boolean;
  otpSentSuccess?: boolean;
  otpResponse?: any;
  otpSentError?: any;
  otpVerified?: boolean;
  otpVerifiedError?: any;
  clientCreateSuccess?: boolean;
  createdClientData?: any;
  clientCreateError?: any;
  createBookingSuccess?: boolean;
  createdBookingData?: any;
  createBookingError?: any;
  createPaymentSuccess?: boolean;
  createdPaymentData?: any;
  createPaymentError?: any;
}

const initialState: LayoutDataState = {
  loading: false,
  stepCount: 0,
  counsellorList: [],
  counsellorListError: null,
  selectedCounsellorId: null,
  selectedCounsellorMeetingData: [],
  selectedCounsellorMeetingDataError: null,
  otpSentLoading: false,
  otpSentSuccess: false,
  otpResponse: null,
  otpSentError: null,
  otpVerified: false,
  otpVerifiedError: null,
  clientCreateSuccess: false,
  createdClientData: null,
  clientCreateError: null,
  createBookingSuccess: false,
  createdBookingData: null,
  createBookingError: null,
  createPaymentSuccess: false,
  createdPaymentData: null,
  createPaymentError: null,
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
    // send otp
    sendOtpRequest: (state, action: PayloadAction<any>) => {
      state.otpSentLoading = true;
      state.otpSentError = null;
      state.otpSentSuccess = false;
      state.otpResponse = null;
    },
    sendOtpSuccess: (state, action: PayloadAction<any>) => {
      state.otpSentLoading = false;
      state.otpResponse = action.payload;
      state.otpSentSuccess = true;
    },
    sendOtpFailure: (state) => {
      state.otpSentLoading = false;
      state.otpSentError = true;
      state.otpSentSuccess = false;
      state.otpResponse = null;
    },
    // verify otp
    verifyOtpRequest: (state, action: PayloadAction<any>) => {
      state.otpVerified = false;
      state.otpVerifiedError = null;
    },
    verifyOtpSuccess: (state, action: PayloadAction<any>) => {
      state.otpVerified = true;
    },
    verifyOtpFailure: (state) => {
      state.otpVerified = false;
      state.otpVerifiedError = true;
    },
    // client create
    clientCreateRequest: (state, action: PayloadAction<any>) => {
      state.loading = true;
      state.clientCreateError = null;
      state.clientCreateSuccess = false;
      state.createdClientData = null;
    },
    clientCreateSuccess: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.clientCreateSuccess = true;
      state.createdClientData = action.payload;
    },
    clientCreateFailure: (state) => {
      state.loading = false;
      state.clientCreateError = true;
      state.clientCreateSuccess = false;
      state.createdClientData = null;
    },
    // create booking
    createBookingRequest: (state, action: PayloadAction<any>) => {
      state.loading = true;
      state.createBookingError = null;
      state.createBookingSuccess = false;
      state.createdBookingData = null;
    },
    createBookingSuccess: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.createBookingSuccess = true;
      state.createdBookingData = action.payload;
    },
    createBookingFailure: (state) => {
      state.loading = false;
      state.createBookingError = true;
      state.createBookingSuccess = false;
      state.createdBookingData = null;
    },
    // create payment
    createPaymentSuccess: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.createPaymentSuccess = true;
      state.createdPaymentData = action.payload;
    },
    createPaymentFailure: (state) => {
      state.loading = false;
      state.createPaymentError = true;
      state.createPaymentSuccess = false;
      state.createdPaymentData = null;
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
  sendOtpRequest,
  sendOtpSuccess,
  sendOtpFailure,
  verifyOtpRequest,
  verifyOtpSuccess,
  verifyOtpFailure,
  clientCreateRequest,
  clientCreateSuccess,
  clientCreateFailure,
  createBookingRequest,
  createBookingSuccess,
  createBookingFailure,
  createPaymentSuccess,
  createPaymentFailure,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;
