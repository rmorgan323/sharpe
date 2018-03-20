import formatSharpeRatios from './formatSharpeRatios';

describe('formatSharpeRatios tests', () => {
  it('should return a clean array of objects', () => {
    const mockRawData = {
      'year': [
        {
          'currency': 'BTC',
          'closes': ['100', '101', '102', '103', '104', '105', '106', '107', '108', '109', '110', '111', '112', '113', '114']
        }
      ]
    };

    const sharpeRatio = formatSharpeRatios(mockRawData);
    expect(sharpeRatio).toEqual([{"currency": "BTC", "value": 25.41522595550214}]);
  });
});