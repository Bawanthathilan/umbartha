import { takeLatest } from "redux-saga/effects";
import {
  getCounsellorListRequest,
  getMeetingDataByCounsellorIdRequest,
  sendOtpRequest,
  verifyOtpRequest,
  clientCreateRequest,
} from "../reducer";

import {
  handleGetCounsellorData,
  handleGetMeetingDataByCounsellorId,
  handleSendOtp,
  handleOtpVerify,
  handleClientCreate,
} from "./dashboardSaga";

export default function* dashboardSaga() {
  yield takeLatest(getCounsellorListRequest.type, handleGetCounsellorData);
  yield takeLatest(
    getMeetingDataByCounsellorIdRequest.type,
    handleGetMeetingDataByCounsellorId
  );
  yield takeLatest(sendOtpRequest.type, handleSendOtp);
  yield takeLatest(verifyOtpRequest.type, handleOtpVerify);
  yield takeLatest(clientCreateRequest.type, handleClientCreate);
}
