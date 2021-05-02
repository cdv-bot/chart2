import React from 'react';

import {
  faCheckCircle,
  faHourglassStart,
  faMinusCircle,
  faTimesCircle,
  faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
import './OrderInDay.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import ApiClient from '../../../../api/ApiClient';
import * as Action from './../../../../redux/actions/ActionOrder';

function OrderInDay() {
  const dispatch = useDispatch();
  const [showDel, setShowDel] = React.useState({
    check: false,
    id: '',
  });
  const data = useSelector((state) => state.orderBook.listOrder);

  const handlerDeleteItem = (id) => {
    setShowDel({
      check: true,
      id: id,
    });
  };
  const handlerNoDelete = () => {
    setShowDel({
      check: false,
      id: '',
    });
  };

  const handlerYes = async () => {
    let accessToken = Cookies.get('accessToken');
    if (accessToken) {
      let decode = jwtDecode(accessToken);

      let data = {
        orderID: showDel.id,
        userName: decode.username,
      };

      try {
        await ApiClient.deleteOrder({ data });
        toast.success(<h3>Huỷ thành công ✂ </h3>);
        dispatch(Action.handlerGetOrderBook(decode.username));
        setShowDel(false);
      } catch (error) {
        console.log('orderInday');
        toast.error('Xóa thất bại !!!');
      }
    }
  };

  return (
    <>
      <div className='box_book'>
        <div className='comeinand1_table'>
          <span>lệnh</span>
          <span>Mã</span>
          <span>KL Khớp</span>
          <span>Giá</span>
          <span>TT</span>
        </div>
        <div className='comeinand1_text'>
          {data?.map((value, index) => {
            return (
              <div key={index} className='comeinand1_text-list'>
                <div className='comeinand'>
                  <div>
                    {value.status === 'PendingNew' || value.status === 'New' ? (
                      <input type='checkbox' />
                    ) : null}
                  </div>
                  <span style={value.side === 'NB' ? { color: '#0FF200' } : null}>
                    {value.side === 'NS' ? 'Bán' : 'Mua'}
                  </span>
                </div>
                <span className='code'>{value.symbol}</span>
                <span className='joint'>
                  {`${value.matchedQuantity}/${value.quantity}`}
                </span>
                <span className='joint'>{value.orderType}</span>
                <div className='sort'>
                  {showDel.id === value.orderID ? null : value.status ===
                    'Filled' ? (
                    <FontAwesomeIcon icon={faCheckCircle} className='minus' />
                  ) : value.status === 'New' || value.status === 'PendingNew' ? (
                    <FontAwesomeIcon className='Hourglass' icon={faHourglassStart} />
                  ) : value.status === 'Rejected' ? (
                    <FontAwesomeIcon className='minus' icon={faMinusCircle} />
                  ) : value.status === 'Cancelled' ? (
                    <FontAwesomeIcon className='minus' icon={faTrashAlt} />
                  ) : null}
                  {showDel.check && showDel.id === value.orderID ? (
                    <div className='hasDelete'>
                      <button onClick={handlerYes}>Hủy</button>
                      <button onClick={handlerNoDelete}>Không</button>
                    </div>
                  ) : value.cancelable ? (
                    <FontAwesomeIcon
                      className='time'
                      icon={faTimesCircle}
                      onClick={() => handlerDeleteItem(value.orderID)}
                    />
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default OrderInDay;
