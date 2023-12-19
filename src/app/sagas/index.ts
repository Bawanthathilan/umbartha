import { takeLatest } from "redux-saga/effects";
import {
  getTestimonialsRequest,
  subscribeRequest,
  getEventsRequest,
  contactUsRequest,
} from "../reducer";

import {
  handleGetTestimonials,
  handleSubscribe,
  handleGetEvents,
  handleContactUs,
} from "./homeSaga";

export default function* homeSaga() {
  yield takeLatest(getTestimonialsRequest.type, handleGetTestimonials);
  yield takeLatest(subscribeRequest.type, handleSubscribe);
  yield takeLatest(getEventsRequest.type, handleGetEvents);
  yield takeLatest(contactUsRequest.type, handleContactUs);
}
