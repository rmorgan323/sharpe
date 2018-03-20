import React from 'react';
import CryptoData from './index';
import { shallow } from 'enzyme';
import mockCleanSparkline from '../../helpers/mockData/mockCleanSparkline';

describe('CryptoData tests', () => {
  let renderedCryptoData;

  beforeEach(() => {
    renderedCryptoData = shallow(<CryptoData cryptoData={mockCleanSparkline} />);
  });

  it('displayClass should return a class only if button is active', () => {
    expect(renderedCryptoData.instance().displayClass('symbol')).toEqual('button-active');
    expect(renderedCryptoData.instance().displayClass('sharpe')).toEqual(undefined);
  });

  it('only active button should have class of button-active', () => {
    expect(renderedCryptoData.find('button').first().hasClass('button-active')).toEqual(true);
    expect(renderedCryptoData.find('button').last().hasClass('button-active')).toEqual(false);

    const mockEvent = { target: { name: 'stdDeviation' } };
    renderedCryptoData.find('button').last().simulate('click', mockEvent);

    expect(renderedCryptoData.find('button').first().hasClass('button-active')).toEqual(false);
    expect(renderedCryptoData.find('button').last().hasClass('button-active')).toEqual(true);
  });

  it('should have an initial state', () => {
    expect(renderedCryptoData.state('sort')).toEqual('symbol');
  });

  it('should update state on button click', () => {
    const mockEvent = { target: { name: 'stdDeviation' } };
    renderedCryptoData.find('button').last().simulate('click', mockEvent);

    expect(renderedCryptoData.state('sort')).toEqual('stdDeviation');
  });

  it('sortBy should update state', () => {
    const mockEvent = { target: { name: 'sharpe' } };
    renderedCryptoData.instance().sortBy(mockEvent);

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
    const mockEvent1 = { target: { name: 'sharpe' } };
    const mockEvent2 = { target: { name: 'totalReturn' } };

    renderedCryptoData.instance().sortBy(mockEvent1);
    expect(renderedCryptoData.instance().orderCryptoData(mockCleanSparkline))
      .toEqual(expectedBefore);

    renderedCryptoData.instance().sortBy(mockEvent2);
    expect(renderedCryptoData.instance().orderCryptoData(mockCleanSparkline))
      .toEqual(expectedAfter);
  });
});