import { createSelector } from "@reduxjs/toolkit";

export const createAppSelector = createSelector.withTypes<RootState>();
