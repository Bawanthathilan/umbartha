import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface QueryDataState {
  testimonialsList: any;
  testimonialsLoading: boolean;
  subscribeLoading: boolean;
  subscribeSuccess: boolean;
}

const initialState: QueryDataState = {
  testimonialsList: [],
  testimonialsLoading: false,
  subscribeLoading: false,
  subscribeSuccess: false,
};

const homeDataSlice = createSlice({
  name: "homeData",
  initialState,
  reducers: {
    // get Testimonials
    getTestimonialsRequest: (state) => {
      state.testimonialsLoading = true;
    },
    getTestimonialsSuccess: (state, action: PayloadAction<any>) => {
      state.testimonialsLoading = false;
      state.testimonialsList = action.payload;
    },
    getTestimonialsFailure: (state, action: PayloadAction<any>) => {
      state.testimonialsLoading = false;
    },
    // subscribe
    subscribeRequest: (state, action: PayloadAction<any>) => {
      state.subscribeLoading = true;
      state.subscribeSuccess = false;
    },
    subscribeSuccess: (state, action: PayloadAction<any>) => {
      state.subscribeLoading = false;
      state.subscribeSuccess = true;
    },
    subscribeFailure: (state, action: PayloadAction<any>) => {
      state.subscribeLoading = false;
      state.subscribeSuccess = false;
    },
    resetSubscribe: (state) => {
      state.subscribeLoading = false;
      state.subscribeSuccess = false;
    },
  },
});

export const {
  getTestimonialsRequest,
  getTestimonialsSuccess,
  getTestimonialsFailure,
  subscribeRequest,
  subscribeSuccess,
  subscribeFailure,
  resetSubscribe,
} = homeDataSlice.actions;

export default homeDataSlice.reducer;
