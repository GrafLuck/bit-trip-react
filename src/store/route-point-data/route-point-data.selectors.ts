import { NameSpace } from '../../const';
import { TRoutePointsWithID } from '../../types/route-point';
import { State } from '../../types/state';


export const getRoutePoints = (state: Pick<State, NameSpace.RoutePoint>): TRoutePointsWithID[] => state[NameSpace.RoutePoint].routePoints;
export const getIsRoutePointsDataLoadingStatus = (state: Pick<State, NameSpace.RoutePoint>): boolean => state[NameSpace.RoutePoint].isRoutePointsDataLoadingStatus;
export const getIsCreateRoutePoint = (state: Pick<State, NameSpace.RoutePoint>): boolean => state[NameSpace.RoutePoint].isCreateRoutePoint;
export const getIsChangeRoutePoint = (state: Pick<State, NameSpace.RoutePoint>): boolean => state[NameSpace.RoutePoint].isChangeRoutePoint;
export const getIsDeleteRoutePoint = (state: Pick<State, NameSpace.RoutePoint>): boolean => state[NameSpace.RoutePoint].isDeleteRoutePoint;

