import React, { Component } from 'react';
import getSparkline from '../../helpers/getSparkline/getSparkline';
import formatCryptoData from '../../helpers/formatCryptoData/formatCryptoData';
import CryptoData from '../../components/CryptoData';
import './index.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      cryptoData: []
    };
  }

  componentDidMount = async () => {
    const rawData = await getSparkline();
    const cryptoData = formatCryptoData(rawData);
    
    this.setState({ cryptoData: cryptoData });
  }

  render() {
    return (
      <div className="App">
        <CryptoData
          cryptoData={this.state.cryptoData}
        />
      </div>
    );
  }
}

export default App;
