import { takeLatest } from "redux-saga/effects";
import {
  getCounsellorListRequest,
  getMeetingDataByCounsellorIdRequest,
} from "../reducer";

import {
  handleGetCounsellorData,
  handleGetMeetingDataByCounsellorId,
} from "./dashboardSaga";

export default function* dashboardSaga() {
  yield takeLatest(getCounsellorListRequest.type, handleGetCounsellorData);
  yield takeLatest(
    getMeetingDataByCounsellorIdRequest.type,
    handleGetMeetingDataByCounsellorId
  );
}
