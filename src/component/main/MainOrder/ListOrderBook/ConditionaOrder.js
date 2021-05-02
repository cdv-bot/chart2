import React from 'react';

function ConditionaOrder(props) {
  return (
    <>
      <div className='control' style={{ display: 'none' }}>
        <div className='control_menu'>
          <ul>
            <li>Lệnh</li>
            <li>Mã</li>
            <li>Giá kích hoạt</li>
            <li>KL</li>
            <li>Giá</li>
            <li>Ngày hết hạn</li>
            <li>TT</li>
          </ul>
        </div>
        <div className='control_list'>Chưa có lệnh nào trong sổ lệnh</div>
      </div>
    </>
  );
}

export default ConditionaOrder;
