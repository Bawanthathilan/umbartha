import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface QueryDataState {
  testimonialsList: any;
  testimonialsLoading: boolean;
  subscribeLoading: boolean;
  subscribeSuccess: boolean;
  eventsList: any;
  eventsLoading: boolean;
  contactUsLoading?: boolean;
  contactUsSuccess?: boolean;
}

const initialState: QueryDataState = {
  testimonialsList: [],
  testimonialsLoading: false,
  subscribeLoading: false,
  subscribeSuccess: false,
  eventsList: [],
  eventsLoading: false,
  contactUsLoading: false,
  contactUsSuccess: false,
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
    // get events
    getEventsRequest: (state) => {
      state.eventsLoading = true;
    },
    getEventsSuccess: (state, action: PayloadAction<any>) => {
      state.eventsLoading = false;
      state.eventsList = action.payload;
    },
    getEventsFailure: (state, action: PayloadAction<any>) => {
      state.eventsLoading = false;
    },
    // contact us
    contactUsRequest: (state, action: PayloadAction<any>) => {
      state.contactUsLoading = true;
      state.contactUsSuccess = false;
    },
    contactUsSuccess: (state, action: PayloadAction<any>) => {
      state.contactUsLoading = false;
      state.contactUsSuccess = true;
    },
    contactUsFailure: (state, action: PayloadAction<any>) => {
      state.contactUsLoading = false;
      state.contactUsSuccess = false;
    },
    resetContactUs: (state) => {
      state.contactUsLoading = false;
      state.contactUsSuccess = false;
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
  getEventsRequest,
  getEventsSuccess,
  getEventsFailure,
  contactUsRequest,
  contactUsSuccess,
  contactUsFailure,
  resetContactUs,
} = homeDataSlice.actions;

export default homeDataSlice.reducer;
