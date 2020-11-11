import React, { useContext, useReducer } from 'react'
import { Wrapped } from './style';
import { Context } from '../../reducer';
import { RoomContext, initialState, reducer } from '../../roomContext';
import DefaultLinkBtn from '../../components/defaultButton';

const Game = () => {
  const [roomState, setState] = useReducer(reducer, initialState)
  const {store, dispatch} = useContext(Context);
  console.log('store', store)
  console.log('roomState', roomState)
  
    return (
        <RoomContext.Provider value={{store, dispatch}} >
            <Wrapped>
                <h3>Game</h3>
                <DefaultLinkBtn to="/" text="exit" />
            </Wrapped>
        </RoomContext.Provider>
    )
}

export default Game;