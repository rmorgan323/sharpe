import React, { Component } from 'react';

class SharpeRatios extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sort: 'symbol'
    }
  }

  displaySharpeRatios = () => {
    const type = this.state.sort;
    let display = this.props.sharpeRatios.sort((a, b) => {
      if (a[type] < b[type]) { return -1 };
      if (a[type] > b[type]) { return 1 };
      return 0;
    });

    type === 'value' ? display = display.reverse() : null;

    return display.map((currency, index) => {
      return (
        <tr key={`${currency}-${index}`} >
          <td>{currency.symbol}</td>
          <td>{currency.value}</td>
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
              <th><button onClick={() => this.sortBy('symbol')}>currency</button></th>
              <th><button onClick={() => this.sortBy('value')}>Sharpe ratio</button></th>
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