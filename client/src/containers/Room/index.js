import React, { useContext, useReducer } from 'react'
import {Wrapped, StyledA, StyledH1} from './style';
import Link from 'next/link';
import { Context } from '../../reducer';
import { RoomContext, initialState, reducer } from '../../roomContext';

const Game = () => {
  const [roomState, setState] = useReducer(reducer, initialState)
  const {store, dispatch} = useContext(Context);
  console.log('store', store)
  console.log('roomState', roomState)
  
    return (
        <RoomContext.Provider value={{store, dispatch}} >
            <Wrapped>
                <h3>Game</h3>
                <Link passHref href="/" >
                    <StyledA>Exit</StyledA>
                </Link>
            </Wrapped>
        </RoomContext.Provider>
    )
}

export default Game;