import { formatCryptoData, createReturnsArray } from './formatCryptoData';
import mockRawSparkline from '../mockData/mockRawSparkline';

describe('formatCryptoData tests', () => {
  it('formatCryptoData should return a clean array of objects', () => {
    const expected = [{
      avgDailyReturn: 0.009403158468861547, 
      sharpe: 25.41522595550214, 
      stdDeviation: 0.00036998130511705556, 
      symbol: "BTC", 
      totalReturn: 0.14
    }];
    const cryptoData = formatCryptoData(mockRawSparkline);

    expect(cryptoData).toEqual(expected);
  });

  it('createReturnsArray should return an array of daily currency returns', () => {
    const expected = [ 
      0.01,
      0.009900990099009901,
      0.00980392156862745,
      0.009708737864077669,
      0.009615384615384616,
      0.009523809523809525,
      0.009433962264150943,
      0.009345794392523364,
      0.009259259259259259,
      0.009174311926605505,
      0.00909090909090909,
      0.009009009009009009,
      0.008928571428571428,
      0.008849557522123894 
    ];

    const returnsArray = createReturnsArray(mockRawSparkline.year[0]);
    expect(returnsArray).toEqual(expected);
  });
});