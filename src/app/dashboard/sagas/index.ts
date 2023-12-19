import { takeLatest } from "redux-saga/effects";
import { getCounsellorListRequest } from "../reducer";

import { handleGetCounsellorData } from "./dashboardSaga";

export default function* dashboardSaga() {
  yield takeLatest(getCounsellorListRequest.type, handleGetCounsellorData);
}
