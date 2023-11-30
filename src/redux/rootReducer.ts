import { combineReducers } from "@reduxjs/toolkit";

import dashboardSlice from "../app/dashboard/reducer";

const rootReducer = combineReducers({
  dashboard: dashboardSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
