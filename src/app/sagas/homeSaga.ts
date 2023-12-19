import { put, call, CallEffect, PutEffect } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";

import { getTestimonials, subscribeApi } from "../../api/endpoints/service";
import {
  getTestimonialsSuccess,
  getTestimonialsFailure,
  subscribeSuccess,
  subscribeFailure,
} from "../reducer";

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

export function* handleSubscribe(
  action: PayloadAction<string>
): Generator<CallEffect | PutEffect, void, unknown> {
  try {
    const response: any = yield call(subscribeApi, action.payload);
    console.log(response);
    const { status, data } = response;
    if (status !== 201) {
      throw new Error("Something went wrong");
    }
    yield put(subscribeSuccess(data));
  } catch (error: any) {
    yield put(subscribeFailure(error.message));
  }
}
