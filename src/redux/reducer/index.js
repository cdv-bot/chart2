import { combineReducers } from 'redux';
import orderBook from './orderBook';
import eventSelect from './eventClick';

const rootReducer = combineReducers({
  orderBook,
  eventSelect,
});

export default rootReducer;
