import React, { useEffect } from 'react';
import ApiClient from '../../../api/ApiClient';
import DerivativePrice from './DerivativePrice';
import './style.scss';

function MainList() {
  // const [changes, setChanges] = React.useState('');
  const [listData, setListData] = React.useState([]);
  useEffect(() => {
    try {
      ApiClient.listPrice().then((data) => setListData(data.data));
    } catch (err) {
      console.log('mainlist');
    }
  }, []);

  return (
    <>
      <div className='App__content-box2'>
        <div className='table_top'>
          <div className='table_top-one'>
            <span>VN30F2104</span>
            <span>
              <p>Sàn:</p>
              <p>1080.7</p>
            </span>
            <span>
              <p>TC:</p>
              <p>1162.0</p>
            </span>
            <span>
              <p>Trần:</p>
              <p>1243.3</p>
            </span>
          </div>
          <div className='price_step'>
            <span className='buocgia'>Bước giá</span>
            <span className='lichsu'>Lịch sử khớp lệnh</span>
          </div>
          <div className='table_count'>
            <div className='table_count-left'>
              <div className='table_price'>
                <span>KL Mua</span>
                <span>Giá Mua</span>
              </div>
              <div className='number_count'>
                <div className='list_count1'>
                  <span>175</span>
                  <span>1173.0</span>
                </div>
                <div className='list_count2'>
                  <span>175</span>
                  <span>1173.0</span>
                </div>
                <div className='list_count3'>
                  <span>175</span>
                  <span>1173.0</span>
                </div>
                <div className='list_count4'>
                  <span>175</span>
                  <span>1173.0</span>
                </div>
                <div className='list_count5'>
                  <span>175</span>
                  <span>1173.0</span>
                </div>
                <div className='list_count6'>
                  <span>175</span>
                  <span>1173.0</span>
                </div>
              </div>
            </div>
            <div className='table_count-right'>
              <div className='table_price'>
                <span>Giá Mua</span>
                <span>KL Mua</span>
              </div>
              <div className='number_count'>
                <div className='list_count1'>
                  <span>1173.0</span>
                  <span>175</span>
                </div>
                <div className='list_count2'>
                  <span>1173.0</span>
                  <span>175</span>
                </div>
                <div className='list_count3'>
                  <span>1173.0</span>
                  <span>175</span>
                </div>
                <div className='list_count4'>
                  <span>1173.0</span>
                  <span>175</span>
                </div>
                <div className='list_count5'>
                  <span>1173.0</span>
                  <span>175</span>
                </div>
                <div className='list_count6'>
                  <span>1173.0</span>
                  <span>175</span>
                </div>
              </div>
            </div>
          </div>
          <div className='history'>
            <div className='history_table'>
              <span>TG</span>
              <span>Giá</span>
              <span>+/-</span>
              <span>KL</span>
              <span>KL tích lũy</span>
            </div>
            <div className='history_list'>
              <div className='list_1'>
                <p>14:45:15</p>
                <p>11173.0</p>
                <p>11</p>
                <p>5,337</p>
                <p>225,707</p>
              </div>
              <div className='list_1'>
                <p>14:45:15</p>
                <p>11173.0</p>
                <p>11</p>
                <p>5,337</p>
                <p>225,707</p>
              </div>
              <div className='list_1'>
                <p>14:45:15</p>
                <p>11173.0</p>
                <p>11</p>
                <p>5,337</p>
                <p>225,707</p>
              </div>
              <div className='list_1'>
                <p>14:45:15</p>
                <p>11173.0</p>
                <p>11</p>
                <p>5,337</p>
                <p>225,707</p>
              </div>
              <div className='list_1'>
                <p>14:45:15</p>
                <p>11173.0</p>
                <p>11</p>
                <p>5,337</p>
                <p>225,707</p>
              </div>
              <div className='list_1'>
                <p>14:45:15</p>
                <p>11173.0</p>
                <p>11</p>
                <p>5,337</p>
                <p>225,707</p>
              </div>
              <div className='list_1'>
                <p>14:45:15</p>
                <p>11173.0</p>
                <p>11</p>
                <p>5,337</p>
                <p>225,707</p>
              </div>
              <div className='list_1'>
                <p>14:45:15</p>
                <p>11173.0</p>
                <p>13</p>
                <p>5,337</p>
                <p>225,707</p>
              </div>
            </div>
          </div>
        </div>
        <DerivativePrice>
          {listData.map((value, index) => {
            return (
              <div className='item-list' key={index}>
                <p>{value.code}</p>
                <p>{value.open}</p>
                <p>{value.change}</p>
                <p>{value.pctChange}</p>
                <p>{value.nmVolume}</p>
              </div>
            );
          })}
        </DerivativePrice>
      </div>
    </>
  );
}

export default MainList;
