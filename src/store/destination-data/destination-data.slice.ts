import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { getDestinationsAction } from '../actions/api-actions';
import { TDestinationData } from '../../types/state';

const initialState: TDestinationData = {
  destinations: [],
  isDestinatiosDataLoadingStatus: false,
};

export const destinationData = createSlice({
  name: NameSpace.Destination,
  initialState,
  reducers: {

  },
  extraReducers(builder) {
    builder
      .addCase(getDestinationsAction.pending, (state) => {
        state.isDestinatiosDataLoadingStatus = true;
      })
      .addCase(getDestinationsAction.fulfilled, (state, action) => {
        state.isDestinatiosDataLoadingStatus = false;
        state.destinations = action.payload;
      })
      .addCase(getDestinationsAction.rejected, (state) => {
        state.isDestinatiosDataLoadingStatus = false;
      });
  }
});
