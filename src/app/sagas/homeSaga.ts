import { put, call, CallEffect, PutEffect } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";

import {
  getTestimonials,
  subscribeApi,
  getEvents,
  contactUsApi,
  getFaq,
} from "../../api/endpoints/service";
import {
  getTestimonialsSuccess,
  getTestimonialsFailure,
  subscribeSuccess,
  subscribeFailure,
  getEventsSuccess,
  getEventsFailure,
  contactUsSuccess,
  contactUsFailure,
  getFaqsSuccess,
  getFaqsFailure,
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

export function* handleGetEvents(
  action: PayloadAction<string>
): Generator<CallEffect | PutEffect, void, unknown> {
  try {
    const response: any = yield call(getEvents);
    const { status, data } = response;
    if (status !== 200) {
      throw new Error("Something went wrong");
    }
    yield put(getEventsSuccess(data));
  } catch (error: any) {
    yield put(getEventsFailure(error.message));
  }
}

export function* handleContactUs(
  action: PayloadAction<string>
): Generator<CallEffect | PutEffect, void, unknown> {
  try {
    const response: any = yield call(contactUsApi, action.payload);
    console.log(response);
    const { status, data } = response;
    if (status !== 201) {
      throw new Error("Something went wrong");
    }
    yield put(contactUsSuccess(data));
  } catch (error: any) {
    yield put(contactUsFailure(error.message));
  }
}

export function* handleGetFaq(
  action: PayloadAction<string>
): Generator<CallEffect | PutEffect, void, unknown> {
  try {
    const response: any = yield call(getFaq);
    const { status, data } = response;
    if (status !== 200) {
      throw new Error("Something went wrong");
    }
    yield put(getFaqsSuccess(data));
  } catch (error: any) {
    yield put(getFaqsFailure(error.message));
  }
}
