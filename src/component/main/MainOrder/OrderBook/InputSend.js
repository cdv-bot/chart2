import React from 'react';

function InputSend({ handlerOrder, checkbox }) {
  return (
    <div className='bt'>
      <button onClick={() => handlerOrder('NB')}>MUA</button>
      <button onClick={() => handlerOrder('NS')}>BÁN</button>
      <label htmlFor='Luu'>
        <input type='checkbox' ref={checkbox} name='check' id='Luu' />
        Lưu lệnh
      </label>
    </div>
  );
}

export default InputSend;
