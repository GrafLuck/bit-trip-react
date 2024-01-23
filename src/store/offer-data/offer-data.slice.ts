import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { getOffersAction } from '../actions/api-actions';
import { TOfferData } from '../../types/state';

const initialState: TOfferData = {
  offers: [],
  isOfferDataLoadingStatus: false,
};

export const offerData = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {

  },
  extraReducers(builder) {
    builder
      .addCase(getOffersAction.pending, (state) => {
        state.isOfferDataLoadingStatus = true;
      })
      .addCase(getOffersAction.fulfilled, (state, action) => {
        state.isOfferDataLoadingStatus = false;
        state.offers = action.payload;
      })
      .addCase(getOffersAction.rejected, (state) => {
        state.isOfferDataLoadingStatus = false;
      });
  }
});
