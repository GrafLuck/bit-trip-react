import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { routePointData } from './route-point-data/route-point-data.slice';
import { destinationData } from './destination-data/destination-data.slice';
import { offerData } from './offer-data/offer-data.slice';

export const rootReducer = combineReducers({
  [NameSpace.RoutePoint]: routePointData.reducer,
  [NameSpace.Destination]: destinationData.reducer,
  [NameSpace.Offer]: offerData.reducer,
});
