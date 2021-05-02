import React, { useEffect } from 'react';
import './style.scss';

import { faTrophy, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Cookies from 'js-cookie';
import { NavLink, useHistory } from 'react-router-dom';
import logo from './../../assets/image/logo.svg';
import Clock from './../../common/Clock';
import Day from './../../common/Day';
import TopPlayer from './TopPlayer';

import jwt_decode from 'jwt-decode';
import ApiClient from '../../api/ApiClient';

function Menu() {
  const history = useHistory();
  const [closeTop, setCloseTop] = React.useState(false);
  const [userName, setUserName] = React.useState(null);
  const [dataTop, setDataTop] = React.useState([]);

  const token = Cookies.get('accessToken');
  useEffect(() => {
    if (token) {
      let data = jwt_decode(token);
      setUserName(data.customerName);
    }
  }, [token]);

  const handlerOpenTop = async () => {
    try {
      let data = await ApiClient.topAssets();
      setDataTop(data);
    } catch (err) {
      console.log(err);
    }
    setCloseTop(true);
  };

  const handlerCloseTop = () => {
    setCloseTop(false);
  };

  const handlerLogout = () => {
    Cookies.remove('accessToken');
    history.go(0);
  };

  return (
    <div className='Menu'>
      {closeTop ? (
        <TopPlayer data={dataTop} handlerCloseTop={handlerCloseTop} />
      ) : (
        ''
      )}

      <div className='Menu-left'>
        <img className='logo' alt='name' src={logo} />
        <ul className='timer'>
          <li id='nameTime'>
            <Clock />
          </li>
          <li>
            <Day />
          </li>
          <li>
            <NavLink
              exact
              to='/trang-chu'
              activeStyle={{
                color: '#E2891D',
              }}>
              Trang chủ
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to='/tai-san'
              activeStyle={{
                color: '#E2891D',
              }}>
              Tài sản
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              to='/huong-dan-su-dung'
              activeStyle={{
                color: '#E2891D',
              }}>
              Hướng dẫn
            </NavLink>
          </li>
          <li> Lãi/Lỗ: 12</li>
        </ul>
        <div className='top_person' onClick={handlerOpenTop}>
          <FontAwesomeIcon icon={faTrophy} />
          <p>Top cao thủ phái sinh</p>
        </div>
      </div>
      <div className='App__menu-right'>
        <span className='traial'>BẢN TRIAL</span>
        <div className='accout'>
          <a href='/#'>Nâng cấp tài khoản</a>
        </div>
        <div className='info_acc'>
          <FontAwesomeIcon icon={faUserAlt} />
          <span>{userName}</span>
          <div className='logout' onClick={handlerLogout}>
            <span id='logout_home' style={{ cursor: 'pointer' }}>
              Logout
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
