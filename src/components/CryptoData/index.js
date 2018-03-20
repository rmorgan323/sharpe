/* eslint-disable id-length */

import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class CryptoData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sort: 'symbol'
    };
  }

  orderCryptoData = (values) => {
    const type = this.state.sort;
    let display = values.sort((a, b) => {
      if (a[type] < b[type]) { return -1; }
      if (a[type] > b[type]) { return 1; }
      return 0;
    });
    type !== 'symbol' ? display = display.reverse() : null;

    return display;
  }

  displayCryptoData = () => {
    const orderedData = this.orderCryptoData(this.props.cryptoData);
  
    return orderedData.map((currency, index) => {
      return (
        <tr key={`${currency}-${index}`} >
          <td>{currency.symbol}</td>
          <td>{currency.sharpe.toFixed(3)}</td>
          <td>{currency.totalReturn.toFixed(3)}</td>
          <td>{currency.avgDailyReturn.toFixed(3)}</td>
          <td>{currency.stdDeviation.toFixed(3)}</td>
        </tr>
      );
    });
  }

  sortBy = (type) => {
    this.setState({sort: type});
  }

  render() {
    return (
      <div className="CryptoData">
        <table>
          <thead>
            <tr>
              <th>
                <button onClick={() => this.sortBy('symbol')}>Currency</button>
              </th>
              <th>
                <button onClick={() => this.sortBy('sharpe')}>Sharpe Ratio</button>
              </th>
              <th>
                <button onClick={() => this.sortBy('totalReturn')}>Total Return</button>
              </th>
              <th>
                <button onClick={() => this.sortBy('avgDailyReturn')}>Average Daily Return</button>
              </th>
              <th>
                <button onClick={() => this.sortBy('stdDeviation')}>Standard Deviation</button>
              </th>
            </tr>
          </thead>
          <tbody>
            {this.displayCryptoData()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CryptoData;

CryptoData.propTypes = {
  cryptoData: PropTypes.array
};