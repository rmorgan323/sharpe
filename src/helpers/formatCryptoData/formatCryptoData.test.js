import formatCryptoData from './formatCryptoData';
import mockRawSparkline from '../mockData/mockRawSparkline';

describe('formatCryptoData tests', () => {
  it('should return a clean array of objects', () => {
    const sharpeRatio = formatCryptoData(mockRawSparkline);

    expect(sharpeRatio).toEqual([{
      avgDailyReturn: 0.009403158468861547, 
      sharpe: 25.41522595550214, 
      stdDeviation: 0.00036998130511705556, 
      symbol: "BTC", 
      totalReturn: 0.14
    }]);
  });
});