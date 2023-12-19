import { put, call, CallEffect, PutEffect } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";

import { getTestimonials } from "../../api/endpoints/service";
import { getTestimonialsSuccess, getTestimonialsFailure } from "../reducer";

export function* handleGetTestimonials(
  action: PayloadAction<string>
): Generator<CallEffect | PutEffect, void, unknown> {
  try {
    const response: any = yield call(getTestimonials);
    const { status, data } = response;
    if (status !== 200) {
      throw new Error("Something went wrong");
    }
    yield put(getTestimonialsSuccess(data));
  } catch (error: any) {
    yield put(getTestimonialsFailure(error.message));
  }
}
