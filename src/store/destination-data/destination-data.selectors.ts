import { NameSpace } from '../../const';
import { TDestination } from '../../types/destination';
import { State } from '../../types/state';


export const getDestinations = (state: Pick<State, NameSpace.Destination>): TDestination[] => state[NameSpace.Destination].destinations;
export const getIsDestinationsDataLoadingStatus = (state: Pick<State, NameSpace.Destination>): boolean => state[NameSpace.Destination].isDestinatiosDataLoadingStatus;
