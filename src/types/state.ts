import { store } from '../store/stores';
import { TDestinations } from './destination';
import { TOffers } from './offer';
import { TRoutePointsWithID } from './route-point';

export type TRoutePointData = {
  routePoints: TRoutePointsWithID[];
  isRoutePointsDataLoadingStatus: boolean;
  isCreateRoutePoint: boolean;
  isChangeRoutePoint: boolean;
  isDeleteRoutePoint: boolean;
}

export type TDestinationData = {
  destinations: TDestinations;
  isDestinatiosDataLoadingStatus: boolean;
}

export type TOfferData = {
  offers: TOffers;
  isOfferDataLoadingStatus: boolean;
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
