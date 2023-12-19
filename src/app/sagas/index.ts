import { takeLatest } from "redux-saga/effects";
import { getTestimonialsRequest, subscribeRequest } from "../reducer";

import { handleGetTestimonials, handleSubscribe } from "./homeSaga";

export default function* homeSaga() {
  yield takeLatest(getTestimonialsRequest.type, handleGetTestimonials);
  yield takeLatest(subscribeRequest.type, handleSubscribe);
}
