import React from 'react';

import ListOrderBook from './ListOrderBook';
import Category from './Category/Category';
import RealEstate from './RealEstate/RealEstate';
import OrderBook from './OrderBook';
import { useSelector } from 'react-redux';
function MainOrder() {
  const idOpenList = useSelector((state) => state.eventSelect.idSelect);

  return (
    <>
      <div className='App__content-box3'>
        <div className='box3_top'>
          <div className='comeinand1'>
            {idOpenList === 1 ? (
              <ListOrderBook />
            ) : idOpenList === 2 ? (
              <Category />
            ) : idOpenList === 3 ? (
              <RealEstate />
            ) : null}
          </div>
        </div>
        <div className='box3_bottom'>
          <OrderBook />
        </div>
      </div>
    </>
  );
}

export default MainOrder;
