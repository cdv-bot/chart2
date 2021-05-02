import React from 'react';
import {
  faExternalLinkAlt,
  faMinus,
  faSyncAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import * as Action from '../../../redux/actions/ActionOrder';

function Control({ hider }) {
  const dispatch = useDispatch();
  const handlerHide = () => {
    dispatch(Action.handlerHide(true));
  };
  return (
    <>
      <div className='icon_cn'>
        <FontAwesomeIcon
          icon={faSyncAlt}
          className='icon_ld'
          style={{ cursor: 'pointer' }}
        />

        {hider ? null : (
          <FontAwesomeIcon
            icon={faExternalLinkAlt}
            className='icon_ld'
            style={{ cursor: 'pointer', marginLeft: '10px' }}
          />
        )}

        <FontAwesomeIcon
          icon={faMinus}
          className='icon_ld'
          style={{ cursor: 'pointer' }}
          onClick={handlerHide}
        />
      </div>
    </>
  );
}

export default Control;
