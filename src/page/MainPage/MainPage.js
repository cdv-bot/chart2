import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SelectList from '../../component/main/SelectList';

import MainChart from './../../component/main/MainChart';
import MainList from './../../component/main/MainList';
import MainOrder from './../../component/main/MainOrder';

import * as Action from './../../redux/actions/ActionOrder';
import jwtDecode from 'jwt-decode';
import Cookies from 'js-cookie';

function MainPage(props) {
  const dispatch = useDispatch();
  const showHide = useSelector((state) => state.eventSelect.showHide);
  useEffect(() => {
    let accessToken = Cookies.get('accessToken');
    if (accessToken) {
      let decode = jwtDecode(accessToken);
      dispatch(Action.handlerGetOrderBook(decode.username));
    }
  }, [dispatch]);
  return (
    <div
      className='App__content'
      style={
        showHide
          ? { gridTemplateColumns: '1fr 400px' }
          : { gridTemplateColumns: '1fr 370px 400px' }
      }>
      <MainChart />
      <MainList />
      {showHide ? null : <MainOrder />}
      <SelectList />
    </div>
  );
}

export default MainPage;
