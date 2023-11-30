import { put, call, CallEffect, PutEffect } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";

import { getTestData } from "../../../api/endpoints/service";
import { testSuccess, testFailure } from "../reducer";

export function* handleGetTestData(
  action: PayloadAction<string>
): Generator<CallEffect | PutEffect, void, unknown> {
  try {
    const response: any = yield call(getTestData, action.payload);
    const { status, data } = response;
    if (status !== 200) {
      throw new Error("Something went wrong");
    }
    yield put(testSuccess(data));
  } catch (error: any) {
    yield put(testFailure(error.message));
  }
}
