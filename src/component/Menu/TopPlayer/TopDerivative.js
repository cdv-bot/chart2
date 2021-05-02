import React from 'react';
import cup from './../../../assets/image/cup.png';
import cup1 from './../../../assets/image/cup1.png';
import cup2 from './../../../assets/image/cup2.png';

function TopDerivative({ data }) {
  let arrData = [...data];
  arrData.sort((x, y) => {
    return y.netAssetValue - x.netAssetValue;
  });
  // let list = data.slice(0, 20);

  function hasCodeMonny(data) {
    return data.toLocaleString('vi-VN', {
      style: 'currency',
      currency: 'VND',
    });
  }
  return (
    <>
      <div className='player__left-tab'>
        <img src={cup} alt='dá' />
        <span>{arrData[0].username}</span>
        <span>{hasCodeMonny(arrData[0].netAssetValue)}</span>
      </div>
      <div className='player__left-tab'>
        <img
          src={cup1}
          alt='a'
          style={{
            height: '33px',
            left: '-13px',
            bottom: '-2px',
          }}
        />
        <span>{arrData[1].username}</span>
        <span>{hasCodeMonny(arrData[1].netAssetValue)}</span>
      </div>
      <div className='player__left-tab'>
        <img
          src={cup2}
          alt='a'
          style={{
            height: '33px',
            left: '-13px',
            bottom: '-2px',
          }}
        />
        <span>{arrData[2].username}</span>
        <span>{hasCodeMonny(arrData[2].netAssetValue)}</span>
      </div>
    </>
  );
}

export default TopDerivative;
