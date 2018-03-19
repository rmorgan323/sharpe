import React, { Component } from 'react';
import getSparkline from './helpers/getSparkline';
import formatSharpeRatios from './helpers/formatSharpeRatios';
import SharpeRatios from './components/SharpeRatios';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      sharpeRatios: []
    }
  }

  componentDidMount = async () => {
    console.log('getting data')
    const rawData = await getSparkline();
    const sharpeRatios = formatSharpeRatios(rawData);
    console.log('got data')
    
    this.setState({ sharpeRatios: sharpeRatios });
    console.log('set state')
  }

  render() {
    console.log('rendering app')
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
