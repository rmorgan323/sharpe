/* eslint-disable id-length */

import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import './index.css';

class CryptoData extends Component {
  state = { sort: 'symbol' }

  sortBy = (event) => {
    const { name } = event.target;
    this.setState({ sort: name });
  }

  orderCryptoData = (values) => {
    const type = this.state.sort;
    let display = values.sort((a, b) => {
      if (a[type] < b[type]) { return -1; }
      if (a[type] > b[type]) { return 1; }
      return 0;
    });

    if (type !== 'symbol') { display = display.reverse(); }

    return display;
  }

  displayClass = (type) => {
    const currentType = this.state.sort;
    if (currentType === type) {
      return "button-active";
    }
  }

  displayCryptoData = () => {
    const orderedData = this.orderCryptoData(this.props.cryptoData);

    return orderedData.map((currency, index) => {
      return (
        <tr className="table-row-data" key={`${currency}-${index}`} >
          <td>{currency.symbol}</td>
          <td className="align-right">{currency.sharpe.toFixed(3)}</td>
          <td className="align-right">{currency.totalReturn.toFixed(3)}</td>
          <td className="align-right">{currency.avgDailyReturn.toFixed(3)}</td>
          <td className="align-right">{currency.stdDeviation.toFixed(3)}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div className="CryptoData">
        <table cellSpacing="0">
          <thead>
            <tr>
              <th>
                <button 
                  onClick={this.sortBy}
                  name={'symbol'}
                  className={this.displayClass('symbol')}
                >Currency</button>
              </th>
              <th>
                <button 
                  onClick={this.sortBy}
                  name={'sharpe'}
                  className={this.displayClass('sharpe')}
                >Sharpe Ratio</button>
              </th>
              <th>
                <button 
                  onClick={this.sortBy}
                  name={'totalReturn'}
                  className={this.displayClass('totalReturn')}
                >Total Return</button>
              </th>
              <th>
                <button 
                  onClick={this.sortBy}
                  name={'avgDailyReturn'}
                  className={this.displayClass('avgDailyReturn')}
                >Average Daily Return</button>
              </th>
              <th>
                <button 
                  onClick={this.sortBy}
                  name={'stdDeviation'}
                  className={this.displayClass('stdDeviation')}
                >Standard Deviation</button>
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