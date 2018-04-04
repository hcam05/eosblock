import React from 'react';

import '../styles/Header.css';

const Header = ({ loadData }) => {

  return (
    <div className='header'>
      <span className='header-name'>
        EOS Block
      </span>
      <a className='button' onClick={loadData}>
        Load Block
      </a>
    </div>
  )
}

export default Header;