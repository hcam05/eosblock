Eos = require('eosjs') // Eos = require('./src')

eos = Eos.Testnet({httpEndpoint: 'https://t1readonly.eos.io'}) // testnet at eos.io

const eosQueryLatestBlock = () => {
  eos.getInfo({}).then(result => {
    let blockNum = result.head_block_num;
    eos.getBlock(blockNum).then(result => {console.log(result)})
  });
}