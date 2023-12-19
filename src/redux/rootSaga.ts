import { all } from "redux-saga/effects";

import dashboardSaga from "../app/dashboard/sagas";
import homeSaga from "../app/sagas";

export default function* rootSaga() {
  yield all([
    // add sagas here
    dashboardSaga(),
    homeSaga(),
  ]);
}
