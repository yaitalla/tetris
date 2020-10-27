import React, {useState} from 'react'
import {Wrapped, StyledA, StyledH1} from './style';
import Link from 'next/link';

const App = () => {
  return (
    <Wrapped>
      <h3>TET-mul-2020</h3>
      <Link passHref href="/menu" >
        <StyledA>connect to server</StyledA>
      </Link>
    </Wrapped>
  )
}

export default App;