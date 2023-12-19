import { combineReducers } from "@reduxjs/toolkit";

import dashboardSlice from "../app/dashboard/reducer";
import homeDataSlice from "../app/reducer";

const rootReducer = combineReducers({
  dashboard: dashboardSlice,
  home: homeDataSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
