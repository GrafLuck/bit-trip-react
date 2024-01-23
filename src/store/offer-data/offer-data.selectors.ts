import { NameSpace } from '../../const';
import { TOffers } from '../../types/offer';
import { State } from '../../types/state';


export const getOffers = (state: Pick<State, NameSpace.Offer>): TOffers => state[NameSpace.Offer].offers;
export const getIsOffersDataLoadingStatus = (state: Pick<State, NameSpace.Offer>): boolean => state[NameSpace.Offer].isOfferDataLoadingStatus;
