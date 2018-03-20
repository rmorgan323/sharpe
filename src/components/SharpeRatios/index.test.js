import React from 'react';
import SharpeRatios from './index';
import { shallow } from 'enzyme';
import mockCleanSparkline from '../../helpers/mockData/mockCleanSparkline';

describe('SharpeRatios tests', () => {
  let renderedSharpeRatios;

  beforeEach(() => {
    renderedSharpeRatios = shallow(<SharpeRatios sharpeRatios={mockCleanSparkline} />);
  });

  it('should match the snapshot', () => {
    expect(renderedSharpeRatios).toMatchSnapshot();
  });

  it('should have an initial state', () => {
    expect(renderedSharpeRatios.state('sort')).toEqual('symbol');
  });

  it('sortBy should update state', () => {
    renderedSharpeRatios.instance().sortBy('sharpe');

    expect(renderedSharpeRatios.state('sort')).toEqual('sharpe');
  });

  it('orderSharpeRatios reorder data and return using sort type in state', () => {
    let expectedBefore = [
      {symbol: "BTC", sharpe: 0.3367790990155856, totalReturn: 7.803938213656599, avgDailyReturn: 0.05605384475854788, stdDeviation: 0.16644098437935959},
      {symbol: "ETH", sharpe: 0.30332892173569054, totalReturn: 9.882974392196722, avgDailyReturn: 0.07045845145213675, stdDeviation: 0.2322839874581152}
    ];
    let expectedAfter = [
      {symbol: "ETH", sharpe: 0.30332892173569054, totalReturn: 9.882974392196722, avgDailyReturn: 0.07045845145213675, stdDeviation: 0.2322839874581152},
      {symbol: "BTC", sharpe: 0.3367790990155856, totalReturn: 7.803938213656599, avgDailyReturn: 0.05605384475854788, stdDeviation: 0.16644098437935959}
    ];

    renderedSharpeRatios.instance().sortBy('sharpe');
    expect(renderedSharpeRatios.instance().orderSharpeRatios(mockCleanSparkline)).toEqual(expectedBefore);

    renderedSharpeRatios.instance().sortBy('totalReturn');
    expect(renderedSharpeRatios.instance().orderSharpeRatios(mockCleanSparkline)).toEqual(expectedAfter);
  });
});