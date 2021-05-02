import React from 'react';

function DerivativePrices(props) {
  return (
    <div className='table_bottom'>
      <div className='table_bottom-title'>
        <p>Mã</p>
        <p>Giá</p>
        <p>%</p>
        <p>Lệch</p>
        <p>Tổng KL</p>
      </div>
      <div className='list_count'>{props.children}</div>
    </div>
  );
}

export default DerivativePrices;
