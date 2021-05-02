import React from 'react';
import Control from '../Control';

function Category() {
  return (
    <>
      <div className='comeinand1_title'>
        <div className='title_table tt2'>
          <span className='day_lenh open_tab' style={{ cursor: 'pointer' }}>
            Vị thế mở
          </span>
          <span className='control_lenh close_tab' style={{ cursor: 'pointer' }}>
            Vị thế đóng
          </span>
        </div>
        <div className='icon_cn'>
          <Control hider={true} />
        </div>
      </div>
      <div className='table_book2'>
        <table className='list_context1'>
          <tbody>
            <tr>
              <th>Mã</th>
              <th>KL</th>
              <th>Giá vốn</th>
              <th>Giá hiện tại</th>
              <th>+/-</th>
              <th />
            </tr>
            <tr>
              <td>VN30F2104 (M)</td>
              <td>1</td>
              <td>1,234.5</td>
              <td>1,245.6</td>
              <td>
                <span>1,040,000</span>
              </td>
              <td>
                <button>Đảo</button>
                <button>Đóng</button>
              </td>
            </tr>
            <tr>
              <td />
              <td />
              <td />
              <td>
                <span>Tông</span>
              </td>
              <td>
                <span>710,000</span>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <div className='list_context2' style={{ display: 'none' }}>
          <div className='title_list'>
            <span>Mã</span>
            <span>KL</span>
            <span>Giá mua</span>
            <span>Giá bán</span>
            <span>Lãi/lỗ đã thực hiện</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;
