import { takeLatest } from "redux-saga/effects";
import {
  getCounsellorListRequest,
  getMeetingDataByCounsellorIdRequest,
  sendOtpRequest,
} from "../reducer";

import {
  handleGetCounsellorData,
  handleGetMeetingDataByCounsellorId,
  handleSendOtp,
} from "./dashboardSaga";

export default function* dashboardSaga() {
  yield takeLatest(getCounsellorListRequest.type, handleGetCounsellorData);
  yield takeLatest(
    getMeetingDataByCounsellorIdRequest.type,
    handleGetMeetingDataByCounsellorId
  );
  yield takeLatest(sendOtpRequest.type, handleSendOtp);
}
