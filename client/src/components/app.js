import React, {useState, useReducer, useCallback, useContext} from 'react'
import StartPage from './game/startpage/StartPage';
import  {reducer, initialState, Context } from '../reducer';
import SocketProvider from '../sockets';
// Style
import {Wrap} from './game/style';
import QuickPlay from './game/Quickplay';
import { MENU, USER_LIST, USER_STATUS, QUICK_PLAY, START_PAGE } from '../config/constants';
import SocketContext from '../sockets/context';
import Menu from './game/Menu';
import 'regenerator-runtime';

const App = () => {
  const [store, dispatch] = useReducer(reducer, initialState)
  const {room, rooms} = useContext(SocketContext)
  // console.log(store)
  return (
    <Context.Provider value={{store, dispatch}} >
      <SocketProvider>
        <Wrap>
            {
              store.gameStatus === START_PAGE ? <StartPage callback={dispatch}/> :
              store.gameStatus === QUICK_PLAY ? <QuickPlay callback={dispatch}/>
                                              :  <Menu callback={dispatch}/> 
            }
        </Wrap>
      </SocketProvider>
    </Context.Provider>
  )
}

export default App;