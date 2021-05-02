import React from 'react';
import Control from '../Control';
import ConditionaOrder from './ConditionaOrder';
import './ListOrderInDay.scss';
import OrderInDay from './OrderInDay';

function ListOrderInDay() {
  return (
    <>
      <div className='comeinand1_title'>
        <div className='title_table tt1'>
          <span className='day_lenh' style={{ cursor: 'pointer' }}>
            Lệnh trong ngày
          </span>
          <span className='control_lenh' style={{ cursor: 'pointer' }}>
            Lệnh điều kiện
          </span>
        </div>
        <Control hider={true} />
      </div>
      <div className='table_book1'>
        <OrderInDay />
        <ConditionaOrder />
      </div>
    </>
  );
}

export default ListOrderInDay;
