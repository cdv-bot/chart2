import React from 'react';
import Control from '../Control';

function RealEstate() {
  return (
    <>
      <div className='comeinand1_title' style={{ background: '#3A3D48' }}>
        <div className='tt3' style={{ width: '100%', paddingLeft: '10px' }}>
          <span
            style={{
              fontSize: '1.4rem',
              color: '#F78939',
              textAlign: 'left',
            }}>
            Thông tin tài sản
          </span>
        </div>
        <div className='icon_cn'>
          <Control hider={false} />
        </div>
      </div>

      <div className='table_book3'>
        <div className='money'>
          <span>Tài sản ròng</span>
          <span>45,0000,333</span>
        </div>
        <div className='money'>
          <span>Số dư ký quỹ</span>
          <span>45,0000</span>
        </div>
        <div className='money'>
          <span>Thuế và phí</span>
          <span>0</span>
        </div>
      </div>
    </>
  );
}

export default RealEstate;
