import React from 'react';

function ListTopPlayer2({ data }) {
  let arrData = [...data];
  arrData.sort((x, y) => {
    return y.netAssetValue - x.netAssetValue;
  });

  let list = data.slice(3, 20);
  function hasCodeMonny(data) {
    return data.toLocaleString('vi-VN', {
      style: 'currency',
      currency: 'VND',
    });
  }

  return (
    <>
      {list.map((value, index) => {
        return (
          <li key={index}>
            <span>{value.username}</span>
            <span>{hasCodeMonny(value.netAssetValue)}</span>
          </li>
        );
      })}
    </>
  );
}

export default ListTopPlayer2;
