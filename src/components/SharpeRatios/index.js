import React, { Component } from 'react';

class SharpeRatios extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sort: 'currency'
    }
  }

  displaySharpeRatios = () => {
    return this.props.sharpeRatios.sort((a, b) => {
      if (this.state.sort === 'currency') {
        return a.currency.localeCompare(b.currency);
      } else if (this.state.sort === 'value') {
        return b.value - a.value;
      }
    })
    .map(currency => {
      return (
        <tr>
          <td>{currency.currency}</td>
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
              <th><button onClick={() => this.sortBy('currency')}>currency</button></th>
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