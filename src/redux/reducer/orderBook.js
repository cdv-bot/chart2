import * as Actions from '../../constants/Content';

const initialState = {
  listOrder: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.ORDER_BOOK: {
      return {
        ...state,
        listOrder: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
