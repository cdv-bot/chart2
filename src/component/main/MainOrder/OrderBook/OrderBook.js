import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import NormalOrder from './NormalOrder';
import './NormalOrder.scss';
import OrderBookShop from './OrderBookShop';

function OrderBook(props) {
  const [checkBox, setCheckBox] = React.useState('normalOrder');
  const handlerChangeOrder = (e) => {
    let value = e.target.value;
    setCheckBox(value);
  };
  return (
    <div className='box3_input'>
      <div className='radio'>
        <label htmlFor='lenhthuong'>
          <input
            id='lenhthuong'
            type='radio'
            name='one'
            value='normalOrder'
            onChange={handlerChangeOrder}
            defaultChecked
          />
          Lệnh thường
        </label>
        <label htmlFor='lenhstop'>
          <input
            id='lenhstop'
            type='radio'
            value='normalOrderShop'
            name='one'
            onChange={handlerChangeOrder}
          />
          Lệnh Stop
        </label>
        <label htmlFor='lenhtrailling'>
          <input id='lenhtrailling' type='radio' name='one' />
          Lệnh tralling
        </label>
        <label htmlFor='lenhOSO'>
          <input id='lenhOSO' type='radio' name='one' />
          Lệnh OSO
        </label>
      </div>
      {checkBox === 'normalOrder' ? <NormalOrder /> : <OrderBookShop />}
    </div>
  );
}

export default OrderBook;
