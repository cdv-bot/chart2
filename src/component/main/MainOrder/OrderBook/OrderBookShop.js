import React from 'react';
import InputSend from './InputSend';
import './OrderBookShop.scss';
function OrderBookShop(props) {
  const handlerOrder = () => {};
  return (
    <>
      <div className='orderBookShop'>
        <ul>
          <li>
            <label>Mã HĐTL:</label>
            <input placeholder='VN30F2105' />
          </li>
          <li>
            <label>Giá đặt:</label>
            <input placeholder='Giá' />
          </li>
          <li>
            <label>Khối lượng:</label>
            <input placeholder='KL' />
          </li>
          <li>
            <label>Khi giá khớp</label>
            <div className='inputBt'>
              <span>
                <button>≤</button>
                <button>≥</button>
              </span>
              <input placeholder='Giá kích hoạt' />
            </div>
          </li>
          <li>
            <label>Ngày hết hạn:</label>
            <input placeholder='Ngày hết hạn' />
          </li>
        </ul>
      </div>
      <InputSend handlerOrder={handlerOrder} />
    </>
  );
}

export default OrderBookShop;
