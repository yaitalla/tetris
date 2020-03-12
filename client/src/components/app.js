import React, {useState, useReducer, useCallback, useContext} from 'react'
import StartPage from './game/startpage/StartPage';
import  {reducer, initialState, Context } from '../reducer';
import SocketProvider from '../sockets';
// import { Agent } from 'https';
import Pregame from './game/Menu/preGame';
// Style
import {Wrap} from './game/style';
import { MENU, USER_LIST, USER_STATUS } from '../config/constants';
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
              store.gameStatus === USER_LIST ? <StartPage callback={dispatch}/>
                                        :  <Menu callback={dispatch}/> 
            }
        </Wrap>
      </SocketProvider>
    </Context.Provider>
  )
}

export default App;