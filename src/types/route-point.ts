export type TRoutePointsWithID = TRoutePointWithID[];

export type TRoutePointWithID = {
  id: string;
  basePrice: number;
  dateFrom: string;
  dateTo: string;
  destination: string;
  isFavorite: boolean;
  offers: string[];
  type: TRoutePointType;
};

export type TRoutePoint = Omit<TRoutePointWithID, 'id'>;

export enum TRoutePointType {
  'taxi',
  'bus',
  'train',
  'ship',
  'drive',
  'flight',
  'check-in',
  'sightseeing',
  'restaurant',
}
