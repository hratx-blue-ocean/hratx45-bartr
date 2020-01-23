import paperclips from "../apis/paperclips";

export const GET_ALL_OFFERS = "GET_ALL_OFFERS";
// export const getAllUserOffers = userId => {
//   return async (dispatch, getState) => {
//     const response = await paperclips.get("/offers");
//     dispatch({
//       type: GET_ALL_OFFERS,
//       payload: response.data.rows
//     });
//   };
// };

export const CANCEL_OFFER = "CANCEL_OFFER";
// export const canelOffer = offerId => {
//   return async (dispatch, getState) => {
//     const response = await paperclips.get('/offers/cancel');
//     dispatch({
//       type: CANCEL_OFFER,
//       payload: response.data.rows
//     });
//   };
// };

export const ARCHIVE_OFFER = "ARCHIVE_OFFER";
// export const archiveOffer = offerId => {
//   return async (dispatch, getState) => {
//     const response = await paperclips.get('/offers/archive');
//     dispatch({
//       type: ARCHIVE_OFFER,
//       payload: response.data.rows
//     });
//   };
// };

export const GET_ACTIVE_OFFERS = "GET_ACTIVE_OFFERS";
export const getActiveUserOffers = userId => {
  return async (dispatch, getState) => {
    const response = await paperclips.get("/offers/active", {
      params: {
        userId
      }
    });
    dispatch({
      type: GET_ACTIVE_OFFERS,
      payload: response.data.rows
    });
  };
};

export const GET_CLOSED_OFFERS = "GET_CLOSED_OFFERS";
export const getClosedUserOffers = userId => {
  return async (dispatch, getState) => {
    const response = await paperclips.get("/offers/closed", {
      params: {
        userId
      }
    });
    dispatch({
      type: GET_CLOSED_OFFERS,
      payload: response.data.rows
    });
  };
};
