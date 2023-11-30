import { takeLatest } from "redux-saga/effects";
import { testRequest } from "../reducer";

import { handleGetTestData } from "./dashboardSaga";

export default function* dashboardSaga() {
  yield takeLatest(testRequest.type, handleGetTestData);
}
