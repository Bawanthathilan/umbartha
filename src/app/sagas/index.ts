import { takeLatest } from "redux-saga/effects";
import { getTestimonialsRequest } from "../reducer";

import { handleGetTestimonials } from "./homeSaga";

export default function* homeSaga() {
  yield takeLatest(getTestimonialsRequest.type, handleGetTestimonials);
}
