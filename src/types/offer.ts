import { TRoutePointType } from './route-point';

export type TOffers = TOffer[];

export type TOffer = {
  type: TRoutePointType;
  offers: {
    id: string;
    title: string;
    price: number;
  }[];
}
