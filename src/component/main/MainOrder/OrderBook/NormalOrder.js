import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import ApiClient from '../../../../api/ApiClient';
import * as Action from '../../../../redux/actions/ActionOrder';
import InputSend from './InputSend';

function NormalOrder(props) {
  const [onValue, setOnValue] = React.useState({
    priceType: '',
    quantity: '',
  });

  const refs = useRef(true);
  const checkbox = useRef(null);
  const [listItem, setListItem] = React.useState(false);

  const dispatch = useDispatch();

  const handlerChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    if (name === 'quantity') {
      if (!/\D/.test(value)) {
        setOnValue({
          ...onValue,
          [name]: value,
        });
      }
    }
    if (name === 'priceType') {
      let key = value.toUpperCase();

      setOnValue({
        ...onValue,
        [name]: key,
      });
    }
  };

  const handlerOrder = async (key) => {
    const { priceType, quantity } = onValue;
    if (priceType.trim() === '' || quantity.trim() === '') {
      toast.warning(
        <h3 style={{ color: 'black' }}>Mời bạn nhập đầy đủ thông tin🙌</h3>
      );
    } else {
      let accessToken = Cookies.get('accessToken');
      if (accessToken) {
        let decode = jwtDecode(accessToken);
        let userName = decode.username;
        try {
          const { quantity, priceType } = onValue;
          await ApiClient.orderBook(userName, quantity, priceType, key);
          dispatch(Action.handlerGetOrderBook(userName));
          toast.success(<h3>Đặt lệnh thành công 🎉</h3>);
        } catch (err) {
          dispatch(Action.handlerGetOrderBook(userName));
          toast.error(<h3>Đặt lệnh không thành công !!!</h3>);
        }
      }
      if (!checkbox.current.checked) {
        setOnValue({
          priceType: '',
          quantity: '',
        });
      }
    }
  };

  const handlerFocus = () => {
    setListItem(true);
  };

  const handlerOutFocus = () => {
    if (refs.current) {
      setListItem(false);
    }
  };

  const handlerClick = async (data) => {
    await setOnValue({
      ...onValue,
      priceType: data,
    });
    await setListItem(false);
  };

  const handlerOver = () => {
    refs.current = false;
  };
  const handlerOut = () => {
    refs.current = true;
  };
  return (
    <>
      <div className='input'>
        <div className='item_input'>
          <label htmlFor='mahdtl'>Mã HĐTL:</label>
          <select className='selects'>
            <option value={0}>VN30F2105</option>
          </select>
        </div>
        <div className='item_input'>
          <label htmlFor='giadat'>Giá đặt:</label>
          <input
            autoComplete='off'
            type='text'
            id='giadat'
            value={onValue.priceType}
            name='priceType'
            placeholder='Giá'
            onFocus={handlerFocus}
            onChange={handlerChange}
            onBlur={handlerOutFocus}
          />
          {listItem ? (
            <div
              className='showSelect'
              onMouseOver={handlerOver}
              onMouseOut={handlerOut}
              onClick={() => {
                setListItem(false);
              }}>
              <span onClick={() => handlerClick('ATO')}>ATO</span>
              <span onClick={() => handlerClick('ATC')}>ATC</span>
              <span onClick={() => handlerClick('MTL')}>MTL</span>
              <span onClick={() => handlerClick('MOK')}>MOK</span>
              <span onClick={() => handlerClick('MAK')}>MAK</span>
            </div>
          ) : null}
        </div>
        <div className='item_input'>
          <label htmlFor='khoiluong'>Khối lượng:</label>
          <input
            autoComplete='off'
            type='text'
            value={onValue.quantity}
            id='khoiluong'
            name='quantity'
            placeholder='KL'
            onChange={handlerChange}
          />
        </div>
      </div>
      <InputSend handlerOrder={handlerOrder} checkbox={checkbox} />
    </>
  );
}

export default NormalOrder;
