import formatSharpeRatios from './formatSharpeRatios';

describe('formatSharpeRatios tests', () => {

  it('should return a clean array of objects', () => {
    const mockRawData = {
      'year': [
        {
          'currency': 'BTC',
          'closes': ['1000', '2000', '3000']
        }
      ]
    };

    const sharpeRatio = formatSharpeRatios(mockRawData);
    expect(sharpeRatio).toEqual([{"currency": "BTC", "value": 2.1213203435596424}]);
  });

});