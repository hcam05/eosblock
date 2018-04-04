import React from 'react';

// Styles //
import '../styles/BlockInfo.css';

const BlockInfo = ({ data }) => {
  let block = null;
  if (data !== null) {
    const { previous, timestamp, transaction_merkle_root, producer, producer_changes, producer_signature, cycles, id, block_num, ref_block_prefix } = data
    block = <div className='blockdata-allLines'>
              <span className='blockdata-fieldname'> Block Number: </span> <span className='blockdata-data'> {block_num}  <br /></span>
              <span className='blockdata-fieldname'> Previous: </span> <span className='blockdata-data'> {previous} <br /> </span> 
              <span className='blockdata-fieldname'> Timestamp: </span> <span className='blockdata-data'> {timestamp} <br /> </span> 
              <span className='blockdata-fieldname'> Transaction Merkle Root: </span> <span className='blockdata-data'> {transaction_merkle_root} <br /> </span> 
              <span className='blockdata-fieldname'> Producer: </span> <span className='blockdata-data'>  {producer} <br /></span> 
              <span className='blockdata-fieldname'> Producer Changes: </span> <span className='blockdata-data'> {producer_changes} <br /> </span> 
              <span className='blockdata-fieldname'> Producer Signature: </span> <span className='blockdata-data'> {producer_signature} <br /> </span> 
              <span className='blockdata-fieldname'> Cycles: </span> <span className='blockdata-data'> {cycles} <br /></span> 
              <span className='blockdata-fieldname'> Id: </span> <span className='blockdata-data'> {id} <br /> </span> 
              <span className='blockdata-fieldname'> Ref_block_prefix: </span> <span className='blockdata-data'> {ref_block_prefix} <br /> </span> 
            </div>
  }

  return (
    <div>
      {(data !== null) ? block : null}
    </div>
  )
}

export default BlockInfo;
