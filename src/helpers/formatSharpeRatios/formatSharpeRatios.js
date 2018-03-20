import math from 'mathjs';

const formatSharpeRatios = (rawData) => {
  const sharpeRatio = rawData.year.reduce((accum, currency) => {
    if (currency.closes.length <= 14) {
      return accum;
    }
    
    let returns = [];
    for (let i = 1; i < currency.closes.length; i++) {
      returns.push((currency.closes[i] - currency.closes[i - 1]) / currency.closes[i - 1]);
    };
    const totalReturn = (currency.closes[currency.closes.length - 1] - currency.closes[0]) / currency.closes[0];
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

  return sharpeRatio;
};

export default formatSharpeRatios;