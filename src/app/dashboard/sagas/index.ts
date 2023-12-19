import { takeLatest } from "redux-saga/effects";
import {
  getCounsellorListRequest,
  getMeetingDataByCounsellorIdRequest,
  sendOtpRequest,
  verifyOtpRequest,
  clientCreateRequest,
  createBookingRequest,
} from "../reducer";

import {
  handleGetCounsellorData,
  handleGetMeetingDataByCounsellorId,
  handleSendOtp,
  handleOtpVerify,
  handleClientCreate,
  handleCreateBooking,
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
  yield takeLatest(createBookingRequest.type, handleCreateBooking);
}
