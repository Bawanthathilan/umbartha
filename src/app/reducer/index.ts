import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface QueryDataState {
  testimonialsList: any;
  testimonialsLoading: boolean;
}

const initialState: QueryDataState = {
  testimonialsList: [],
  testimonialsLoading: false,
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
  },
});

export const {
  getTestimonialsRequest,
  getTestimonialsSuccess,
  getTestimonialsFailure,
} = homeDataSlice.actions;

export default homeDataSlice.reducer;
