import React, { Component } from 'react';

import BlockInfo from '../components/BlockInfo.js';
import Header from '../components/Header.js';

import '../styles/App.css';
import Eos from 'eosjs';

const eos = Eos.Testnet({ httpEndpoint: 'https://t1readonly.eos.io' })

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      blockData: null,
    }
  }

  onClickHanlder() {
    console.log('getting latest block!!!')
    //make api call
    eos.getInfo({}).then(result => {
      let blockNum = result.head_block_num;
      eos.getBlock(blockNum).then(result => {
        //set state to response
        this.setState({ blockData: { ...result } })
      })
      //catch errors
      .catch(error => console.log(error));
    });
  }

  render() {
    return (
      <div className="app">
        <Header loadData={this.onClickHanlder.bind(this)} />
        {(this.state.blockData !== null) ? <BlockInfo data={this.state.blockData} /> : ''}
      </div>
    );
  }
}

export default App;
