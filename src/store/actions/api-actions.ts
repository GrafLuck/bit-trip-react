import { createAsyncThunk } from '@reduxjs/toolkit';
import { TRoutePoint, TRoutePointWithID, TRoutePointsWithID } from '../../types/route-point';
import { APIRoute } from '../../const';
import { AppDispatch, State } from '../../types/state';
import { AxiosInstance } from 'axios';
import { TDestinations } from '../../types/destination';
import { TOffers } from '../../types/offer';

export const getRoutePointsAction = createAsyncThunk<TRoutePointsWithID[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'routePoints/getRoutePoints',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<TRoutePointsWithID[]>(APIRoute.Points);
    return data;
  },
);

export const createRoutePointAction = createAsyncThunk<TRoutePointWithID, {routePoint: TRoutePoint }, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'routePoints/createRoutePoint',
  async ({ routePoint }, {extra: api}) => {
    const {data} = await api.post<TRoutePointWithID>(APIRoute.Points, { routePoint });
    return data;
  }
);

export const changeRoutePointAction = createAsyncThunk<TRoutePointWithID, {id: string; routePoint: TRoutePoint}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'routePoints/changeRoutePoint',
  async ({id, routePoint} , {extra: api}) => {
    const {data} = await api.put<TRoutePointWithID>(`${APIRoute.Points}/${id}`, { routePoint });
    return data;
  }
);

export const deleteRoutePointAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'routePoints/deleteRoutePoint',
  async (id, {extra: api}) => await api.delete(`${APIRoute.Points}/${id}`)
);

export const getDestinationsAction = createAsyncThunk<TDestinations, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'destinations/getDestinations',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<TDestinations>(APIRoute.Destinations);
    return data;
  },
);

export const getOffersAction = createAsyncThunk<TOffers, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'offers/getOffers',
  async (id, {extra: api}) => {
    const {data} = await api.get<TOffers>(`${APIRoute.Offers}/${id}`);
    return data;
  }
);
