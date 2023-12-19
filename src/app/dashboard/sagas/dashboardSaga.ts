import { put, call, CallEffect, PutEffect } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";

import { getCounsellorData } from "../../../api/endpoints/service";
import { getCounsellorListSuccess, getCounsellorListFailure } from "../reducer";

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
