import React, {useState} from 'react'
// import socket from '../config/socketConnect'
// import Landing from './landing';
import { connect } from 'react-redux';
import Game from './game';
// import { SHAPE_REQ } from '../config/constants';
// import {store} from '../config/store';

import StartPage from './game/startpage/StartPage';
import { Agent } from 'https';
import styled from 'styled-components';

import Menu from './game/Menu';

// Style
import {Wrap} from './game/style';

const App = ({actualRoom, rooms, index, playing}) => {  
  const [start, setStart] = useState(false)
  const StartGame = () => {
    setStart(true)
  }
  return (
      <Wrap>
          {
            start ? <Menu/>  : <StartPage callback={StartGame}/>
          }
          
      </Wrap>
    )
}

const mapStateToProps = (state) => {
  return {
    actualRoom: state.actualRoom,
    rooms: state.rooms,
    index: state.shapeIndex,
    playing: state.playing
  }
}

export default connect(mapStateToProps)(App);