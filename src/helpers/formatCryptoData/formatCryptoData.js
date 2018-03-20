/* eslint-disable id-length */

import math from 'mathjs';

export const createReturnsArray = (currency) => {
  let returnsArray = [];
  for (let i = 1; i < currency.closes.length; i++) {
    returnsArray.push((currency.closes[i] - currency.closes[i - 1]) / currency.closes[i - 1]);
  }

  return returnsArray;
};

export const formatCryptoData = (rawData) => {
  const cryptoData = rawData.year.reduce((accum, currency) => {
    if (currency.closes.length <= 14) {
      return accum;
    }
    
    const returns = createReturnsArray(currency);
    const totalReturn = (
      (currency.closes[currency.closes.length - 1] - currency.closes[0]) / currency.closes[0]
    );
    const avgDailyReturn = math.mean(returns);
    const stdDeviation = math.std(returns);
    const sharpe = avgDailyReturn / stdDeviation;

    accum.push({ 
      symbol: currency.currency, 
      sharpe: sharpe, 
      totalReturn: totalReturn, 
      avgDailyReturn: avgDailyReturn, 
      stdDeviation: stdDeviation 
    });
    
    return accum;
  }, []);

  return cryptoData;
};

export default formatCryptoData;