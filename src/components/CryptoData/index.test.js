import React from 'react';
import CryptoData from './index';
import { shallow } from 'enzyme';
import mockCleanSparkline from '../../helpers/mockData/mockCleanSparkline';

describe('CryptoData tests', () => {
  let renderedCryptoData;

  beforeEach(() => {
    renderedCryptoData = shallow(<CryptoData cryptoData={mockCleanSparkline} />);
  });

  it('should match the snapshot', () => {
    expect(renderedCryptoData).toMatchSnapshot();
  });

  it('should have an initial state', () => {
    expect(renderedCryptoData.state('sort')).toEqual('symbol');
  });

  it('displayClass should return a class only if button is active', () => {
    expect(renderedCryptoData.instance().displayClass('symbol')).toEqual('button-active');
    expect(renderedCryptoData.instance().displayClass('sharpe')).toEqual(undefined);
  });

  it('sortBy should update state', () => {
    renderedCryptoData.instance().sortBy('sharpe');

    expect(renderedCryptoData.state('sort')).toEqual('sharpe');
  });

  it('orderCryptoData reorder data and return using sort type in state', () => {
    let expectedBefore = [
      {
        symbol: "BTC", 
        sharpe: 0.3367790990155856, 
        totalReturn: 7.803938213656599, 
        avgDailyReturn: 0.05605384475854788, 
        stdDeviation: 0.16644098437935959
      },
      {
        symbol: "ETH", 
        sharpe: 0.30332892173569054, 
        totalReturn: 9.882974392196722, 
        avgDailyReturn: 0.07045845145213675, 
        stdDeviation: 0.2322839874581152
      }
    ];
    let expectedAfter = [
      {
        symbol: "ETH", 
        sharpe: 0.30332892173569054, 
        totalReturn: 9.882974392196722, 
        avgDailyReturn: 0.07045845145213675, 
        stdDeviation: 0.2322839874581152
      },
      {
        symbol: "BTC", 
        sharpe: 0.3367790990155856, 
        totalReturn: 7.803938213656599, 
        avgDailyReturn: 0.05605384475854788, 
        stdDeviation: 0.16644098437935959
      }
    ];

    renderedCryptoData.instance().sortBy('sharpe');
    expect(renderedCryptoData.instance().orderCryptoData(mockCleanSparkline))
      .toEqual(expectedBefore);

    renderedCryptoData.instance().sortBy('totalReturn');
    expect(renderedCryptoData.instance().orderCryptoData(mockCleanSparkline))
      .toEqual(expectedAfter);
  });
});