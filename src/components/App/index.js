import React, { Component } from 'react';
import getSparkline from '../../helpers/getSparkline/getSparkline';
import formatSharpeRatios from '../../helpers/formatSharpeRatios/formatSharpeRatios';
import SharpeRatios from '../../components/SharpeRatios';
import './index.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      sharpeRatios: []
    }
  }

  componentDidMount = async () => {
    const rawData = await getSparkline();
    const sharpeRatios = formatSharpeRatios(rawData);
    
    this.setState({ sharpeRatios: sharpeRatios });
  }

  render() {
    return (
      <div className="App">
        <SharpeRatios 
          sharpeRatios={this.state.sharpeRatios}
        />
      </div>
    );
  }
}

export default App;
