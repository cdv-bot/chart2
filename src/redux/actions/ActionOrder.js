import ApiClient from '../../api/ApiClient';
import * as types from '../../constants/Content';

export const setToken = (data) => {
  return {
    type: types.SET_TOKEN,
    payload: data,
  };
};
export const getOrderBook = (data) => {
  return {
    type: types.ORDER_BOOK,
    payload: data,
  };
};

export const handlerGetOrderBook = (name) => {
  return async (dispatch) => {
    try {
      let data = await ApiClient.getOrderBook({
        username: name,
      });
      dispatch(getOrderBook(data));
    } catch (er) {
      dispatch(getOrderBook([]));
    }
  };
};
// ---------select

export const handlerSelect = (data) => {
  return {
    type: types.SELECT_LIST,
    payload: data,
  };
};

// ---------hide
export const handlerHide = (data) => {
  return {
    type: types.EVENT_HIDE,
    payload: data,
  };
};
