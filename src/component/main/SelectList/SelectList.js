import React, { useEffect } from 'react';
import classnames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import * as Action from '../../../redux/actions/ActionOrder';
function SelectList() {
  const dispatch = useDispatch();
  const showHide = useSelector((state) => state.eventSelect.showHide);
  const [idList, setIdList] = React.useState(1);
  useEffect(() => {
    if (showHide) {
      setIdList(null);
    }
  }, [showHide]);

  const handleList = (data) => {
    dispatch(Action.handlerSelect(data));
    if (showHide) {
      dispatch(Action.handlerHide(false));
    }
    setIdList(data);
  };
  return (
    <div className='select'>
      <span
        className={classnames('sp_1', { dl: idList === 1 })}
        onClick={() => handleList(1)}>
        Sổ lệnh
      </span>
      <span
        className={classnames('sp_2', { dl: idList === 2 })}
        onClick={() => handleList(2)}>
        Danh mục
      </span>
      <span
        className={classnames('sp_3', { dl: idList === 3 })}
        onClick={() => handleList(3)}>
        Tài sản
      </span>
    </div>
  );
}

export default SelectList;
