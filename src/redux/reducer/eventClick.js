import * as Actions from '../../constants/Content';

const initialState = {
  idSelect: 1,
  showHide: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.SELECT_LIST: {
      return {
        ...state,
        idSelect: action.payload,
      };
    }
    case Actions.EVENT_HIDE: {
      return {
        ...state,
        showHide: action.payload,
      };
    }
    default:
      return state;
  }
};

export default reducer;
