import React from 'react';
import { faArrowUp, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import imgPlayer from './../../../assets/image/top-derivative.bb0daf79.png';
import ListTopPlayer2 from './ListTopPlayer2';
import './style.scss';
import TopDerivative from './TopDerivative';
import TopDerivative2 from './TopDerivative2';

function TopPlayer({ handlerCloseTop, data }) {
  return (
    <div className='topPlayer'>
      <div className='cloneTop' onClick={handlerCloseTop}></div>
      <div className='player'>
        <div className='player__left'>
          <div className='player__left-top'>
            <img src={imgPlayer} alt='img' />
            <p>BẢNG XẾP HẠNG THÁNG</p>
          </div>
          <div className='player__left-derivative'>
            <span>CAO THỦ PHÁI SINH</span>
            <div className='nav'>
              <div className='icon-nav'>
                <FontAwesomeIcon className='icon' icon={faArrowUp} />
                <span>NAV</span>
              </div>
              <p>Đơn vị: VND</p>
            </div>
          </div>
          <TopDerivative data={data} />
          <div className='player__left-list'>
            <ul>
              <ListTopPlayer2 data={data} />
            </ul>
          </div>
          <button className='player__left-bt'>THAM GIA NGAY TẠI ĐÂY</button>
        </div>
        <div className='player__right'>
          <div className='player__right-top'>
            <p>BẢNG XẾP HẠNG TUẦN</p>
            <p>(Từ 8h00 thứ 2 đến 15H00 thứ 6 hàng tuần)</p>
          </div>
          <div className='player__right-list'>
            <div className='list-header'>
              <div className='list-header-top'>
                <span>CAO THỦ PHÁI SINH</span>
                <div className='nav'>
                  <div className='icon-nav'>
                    <FontAwesomeIcon className='icon' icon={faArrowUp} />
                    <span>NAV</span>
                  </div>
                  <p>Đơn vị: VND</p>
                </div>
              </div>
              <TopDerivative2 data={data} />
            </div>
            <div className='player__right-fullTop'>
              <ul>
                <ListTopPlayer2 data={data} />
              </ul>
            </div>
          </div>
        </div>
        <FontAwesomeIcon
          icon={faTimes}
          className='close'
          onClick={handlerCloseTop}
        />
      </div>
    </div>
  );
}

export default TopPlayer;
