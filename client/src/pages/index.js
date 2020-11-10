import React, {useContext} from 'react'
import {Wrapped, StyledA, BackgroundWrap,
  Bottom, StyledTitle, Top
} from '../../styles/style';
import Link from 'next/link';
import { Context } from '../reducer';
import dynamic from 'next/dynamic';
import { TETROMINOS, tenMoreShapes } from '../tetrominos';

const shapes = tenMoreShapes([])

const NoSSRAnimShape = dynamic(() => import('../components/animatedShape'), {
  ssr: false
})

const App = () => {
  const {store} = useContext(Context)
  // console.log('/', store)
  return (
    <Wrapped>
      <BackgroundWrap>
        <Top />
        <Bottom />
      </BackgroundWrap>
      <StyledTitle>tetris</StyledTitle>
      <Link passHref href="/multi" >
        <StyledA>multiplayer</StyledA>
      </Link>
      {/* {
        shapes.map((unit, x) =>
              <NoSSRAnimShape key={x} i={x} shape={unit.shape} />
        )
      }. */}
      <Link passHref href="/solo" >
        <StyledA>survie</StyledA>
      </Link>
    </Wrapped>
  )
}

export default App;