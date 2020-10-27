import React, {useState} from 'react'
import {Wrapped, StyledA, StyledH1} from './style';
import Link from 'next/link';


// const ENDPOINT = "http://127.0.0.1:4000";
// const socket = socketIOClient(ENDPOINT);
console.log("GO")

const App = () => {
  return (
    <Wrapped>
      <StyledH1>TET-mul-2020</StyledH1>
      <Link passHref href="/menu" >
        <StyledA>menu</StyledA>
      </Link>
    </Wrapped>
  )
}

export default App;