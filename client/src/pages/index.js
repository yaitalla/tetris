import React, {useContext} from 'react'
import {Wrapped, StyledA, BackgroundWrap,
  Bottom, StyledTitle, Top
} from '../../styles/style';
import Link from 'next/link';
import { Context } from '../reducer';
import DefaultLinkBtn from '../components/defaultButton';

const App = () => {
  const {store} = useContext(Context)
  return (
    <Wrapped>
      <BackgroundWrap>
        <Top />
        <Bottom />
      </BackgroundWrap>
      <StyledTitle>tetris</StyledTitle>
      <DefaultLinkBtn to="/multi" text="multiplayer" />
      <DefaultLinkBtn to="/solo" text="survival" />
    </Wrapped>
  )
}

export default App;