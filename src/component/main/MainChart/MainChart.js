import React from 'react';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import IframeFour from './IframeFour';
import IframeThree from './IframeThree';
import { faChartBar, faChartPie } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function MainChart(props) {
  const [idIframe, setIdIframe] = React.useState(4);
  const handleIframe = (id) => {
    setIdIframe(id);
  };
  return (
    <>
      <div className='App__content-box1'>
        <div className='chart_one'>
          <TradingViewWidget
            symbol='NASDAQ:AAPL'
            theme={Themes.DARK}
            locale='fr'
            autosize
          />
        </div>
        <div className='chart_two'>
          <div className='charts mkw'>
            {idIframe === 4 ? <IframeFour /> : idIframe === 3 ? <IframeThree /> : ''}
          </div>
          <div className='func'>
            <span className='bq'>
              Bản quyền được copy từ VNDIRECT © 2021. v2.2.2
            </span>
            <div className='func_full'>
              <span
                className='mg_sp icon_1'
                onClick={() => handleIframe(1)}
                style={{ color: `${idIframe === 1 ? '#f7941d' : ''}` }}>
                VN30 INTRADAY
              </span>
              <span
                className='mg_sp icon_2'
                onClick={() => handleIframe(2)}
                style={{ color: `${idIframe === 2 ? '#f7941d' : ''}` }}>
                VN30
              </span>
              <FontAwesomeIcon
                className=' mg_sp icon_3'
                icon={faChartBar}
                onClick={() => handleIframe(3)}
                style={{ color: `${idIframe === 3 ? '#f7941d' : ''}` }}
              />
              <FontAwesomeIcon
                icon={faChartPie}
                className=' mg_sp icon_4'
                onClick={() => handleIframe(4)}
                style={{ color: `${idIframe === 4 ? '#f7941d' : ''}` }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainChart;
