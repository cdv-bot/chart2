import TrailServices from './services/TrailServices';
import TopAssets from './services/TopAssets';
import PriceServices from './services/PriceServices';
const ApiClient = {
  login: (params) => {
    const url = '/v2/auth';
    return TrailServices.post(url, params);
  },
  // ---------------
  topAssets: () => {
    const url = '/demotrade/assets';
    return TopAssets.get(url);
  },
  getOrderBook: (params) => {
    const url = 'demotrade/orders';
    return TopAssets.get(url, { params });
  },
  deleteOrder: (params) => {
    const url = 'demotrade/orders';
    return TopAssets.delete(url, params);
  },
  orderBook: (userName, quantity, priceType, side) => {
    const url = 'demotrade/orders';
    return TopAssets.post(url, {
      symbol: 'VN30F2105',
      price: 0,
      userName,
      quantity,
      priceType,
      side,
    });
  },
  listPrice: () => {
    const url = '/v4/derivative_prices?q=type:FU';
    return PriceServices.get(url);
  },
};

export default ApiClient;
