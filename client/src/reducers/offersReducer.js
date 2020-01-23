import {
  DELETE_OFFER,
  GET_ALL_OFFERS,
  CANCEL_OFFER,
  ARCHIVE_OFFER,
  GET_ACTIVE_OFFERS,
  GET_CLOSED_OFFERS
} from "../actions/offerActions";

export const activeOffers = (state = [], action) => {
  switch (action.type) {
    case CANCEL_OFFER:
      state.splice(
        state.findIndex(o => o.offer_id === action.id),
        1
      );
      return state;
    case GET_ACTIVE_OFFERS:
      return action.payload;
    default:
      return state;
  }
};

export const closedOffers = (state = [], action) => {
  switch (action.type) {
    case ARCHIVE_OFFER:
      state.splice(
        state.findIndex(o => o.offer_id === action.id),
        1
      );
      return state;
    case GET_CLOSED_OFFERS:
      return action.payload;
    default:
      return state;
  }
};
