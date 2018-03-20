import math from 'mathjs';

const formatSharpeRatios = (rawData) => {
  const sharpeRatio = rawData.year.reduce((accum, currency) => {
    if (currency.closes.length <= 14) {
      return accum;
    }
    
    let returns = [];
    for (let i = 1; i < currency.closes.length; i++) {
      returns.push((currency.closes[i] - currency.closes[i - 1]) / currency.closes[i - 1])
    };
    const sharpe = math.mean(returns) / math.std(returns);

    accum.push({ symbol: currency.currency, value: sharpe });
    return accum;
  }, []);

  return sharpeRatio;
};

export default formatSharpeRatios;