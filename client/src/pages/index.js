import React, {useContext} from 'react'
import {Wrapped, StyledA} from './style';
import Link from 'next/link';
import { Context } from '../reducer';

const App = () => {
  const {store} = useContext(Context)
  console.log('/', store)
  return (
    <Wrapped>
      <h3>TET-mul-2020</h3>
      <Link passHref href="/multi" >
        <StyledA>multiplayer</StyledA>
      </Link>
      <Link passHref href="/solo" >
        <StyledA>survie (offline)</StyledA>
      </Link>
    </Wrapped>
  )
}

export default App;