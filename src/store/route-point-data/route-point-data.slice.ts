import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { changeRoutePointAction, createRoutePointAction, deleteRoutePointAction, getRoutePointsAction } from '../actions/api-actions';
import { TRoutePointData } from '../../types/state';

const initialState: TRoutePointData = {
  routePoints: [],
  isRoutePointsDataLoadingStatus: false,
  isCreateRoutePoint: false,
  isChangeRoutePoint: false,
  isDeleteRoutePoint: false,
};

export const routePointData = createSlice({
  name: NameSpace.RoutePoint,
  initialState,
  reducers: {

  },
  extraReducers(builder) {
    builder
      .addCase(getRoutePointsAction.pending, (state) => {
        state.isRoutePointsDataLoadingStatus = true;
      })
      .addCase(getRoutePointsAction.fulfilled, (state, action) => {
        state.routePoints = action.payload;
        state.isRoutePointsDataLoadingStatus = false;
      })
      .addCase(getRoutePointsAction.rejected, (state) => {
        state.isRoutePointsDataLoadingStatus = false;
      })
      .addCase(createRoutePointAction.pending, (state) => {
        state.isCreateRoutePoint = true;
      })
      .addCase(createRoutePointAction.fulfilled, (state) => {
        state.isCreateRoutePoint = false;
      })
      .addCase(createRoutePointAction.rejected, (state) => {
        state.isCreateRoutePoint = false;
      })
      .addCase(changeRoutePointAction.pending, (state) => {
        state.isChangeRoutePoint = true;
      })
      .addCase(changeRoutePointAction.fulfilled, (state) => {
        state.isChangeRoutePoint = false;
      })
      .addCase(changeRoutePointAction.rejected, (state) => {
        state.isChangeRoutePoint = false;
      })
      .addCase(deleteRoutePointAction.pending, (state) => {
        state.isDeleteRoutePoint = true;
      })
      .addCase(deleteRoutePointAction.fulfilled, (state) => {
        state.isDeleteRoutePoint = false;
      })
      .addCase(deleteRoutePointAction.rejected, (state) => {
        state.isDeleteRoutePoint = false;
      });
  }
});

