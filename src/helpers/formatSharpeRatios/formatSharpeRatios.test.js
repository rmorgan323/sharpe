import formatSharpeRatios from './formatSharpeRatios';
import mockRawSparkline from '../mockData/mockRawSparkline';

describe('formatSharpeRatios tests', () => {
  it('should return a clean array of objects', () => {
    const sharpeRatio = formatSharpeRatios(mockRawSparkline);

    expect(sharpeRatio).toEqual([{"symbol": "BTC", "value": 25.41522595550214}]);
  });
});