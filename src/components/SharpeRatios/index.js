import React, { Component } from 'react';

class SharpeRatios extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sort: 'symbol'
    }
  }

  orderSharpeRatios = (data) => {
    const type = this.state.sort;
    let display = data.sort((a, b) => {
      if (a[type] < b[type]) { return -1 };
      if (a[type] > b[type]) { return 1 };
      return 0;
    });
    type !== 'symbol' ? display = display.reverse() : null;

    return display;
  }

  displaySharpeRatios = () => {
    const orderedData = this.orderSharpeRatios(this.props.sharpeRatios);
  
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
    })
  }

  sortBy = (type) => {
    this.setState({sort: type});
  }

  render() {
    return (
      <div className="SharpeRatios">
        <table>
          <thead>
            <tr>
              <th><button onClick={() => this.sortBy('symbol')}>Currency</button></th>
              <th><button onClick={() => this.sortBy('sharpe')}>Sharpe Ratio</button></th>
              <th><button onClick={() => this.sortBy('totalReturn')}>Total Return</button></th>
              <th><button onClick={() => this.sortBy('avgDailyReturn')}>Average Daily Return</button></th>
              <th><button onClick={() => this.sortBy('stdDeviation')}>Standard Deviation</button></th>
            </tr>
          </thead>
          <tbody>
            {this.displaySharpeRatios()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default SharpeRatios;