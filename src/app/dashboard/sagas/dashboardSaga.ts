import { put, call, CallEffect, PutEffect } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";

import {
  getCounsellorData,
  getMeetingDataByCounsellorId,
  sendOtp,
  verifyOtp,
  clientCreate,
} from "../../../api/endpoints/service";
import {
  getCounsellorListSuccess,
  getCounsellorListFailure,
  getMeetingDataByCounsellorIdSuccess,
  getMeetingDataByCounsellorIdFailure,
  sendOtpSuccess,
  sendOtpFailure,
  verifyOtpSuccess,
  verifyOtpFailure,
  clientCreateSuccess,
  clientCreateFailure,
} from "../reducer";

export function* handleGetCounsellorData(
  action: PayloadAction<string>
): Generator<CallEffect | PutEffect, void, unknown> {
  try {
    const response: any = yield call(getCounsellorData);
    const { status, data } = response;
    if (status !== 200) {
      throw new Error("Something went wrong");
    }
    yield put(getCounsellorListSuccess(data));
  } catch (error: any) {
    yield put(getCounsellorListFailure(error.message));
  }
}

export function* handleGetMeetingDataByCounsellorId(
  action: PayloadAction<string>
): Generator<CallEffect | PutEffect, void, unknown> {
  try {
    const response: any = yield call(
      getMeetingDataByCounsellorId,
      action.payload
    );
    const { status, data } = response;
    if (status !== 200) {
      throw new Error("Something went wrong");
    }
    yield put(getMeetingDataByCounsellorIdSuccess(data));
  } catch (error: any) {
    yield put(getMeetingDataByCounsellorIdFailure(error.message));
  }
}

export function* handleSendOtp(
  action: PayloadAction<string>
): Generator<CallEffect | PutEffect, void, unknown> {
  try {
    const response: any = yield call(sendOtp, action.payload);
    const { status, data } = response;
    if (status !== 201) {
      throw new Error("Something went wrong");
    }
    yield put(sendOtpSuccess(data));
  } catch (error: any) {
    yield put(sendOtpFailure(error.message));
  }
}

export function* handleOtpVerify(
  action: PayloadAction<string>
): Generator<CallEffect | PutEffect, void, unknown> {
  try {
    const response: any = yield call(verifyOtp, action.payload);
    const { status, data } = response;
    if (status !== 201) {
      throw new Error("Something went wrong");
    }
    yield put(verifyOtpSuccess(data));
  } catch (error: any) {
    yield put(verifyOtpFailure(error.message));
  }
}

export function* handleClientCreate(
  action: PayloadAction<string>
): Generator<CallEffect | PutEffect, void, unknown> {
  try {
    const response: any = yield call(clientCreate, action.payload);
    const { status, data } = response;
    if (status !== 201) {
      throw new Error("Something went wrong");
    }
    yield put(clientCreateSuccess(data));
  } catch (error: any) {
    yield put(clientCreateFailure(error.message));
  }
}
