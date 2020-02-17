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

const shapeRequest = (roomIndex, rooms) => {
  socket.emit(SHAPE_REQ, {i: roomIndex,
                          oldShapes: rooms[roomIndex].shapes})
}
const Wrap = styled.div`
height: 100%;
width: 100%;
position: relative;
`;
const Test = styled.div`
height: 100vh;
width: 100vw;
background-color: pink;
`;
const App = ({actualRoom, rooms, index, playing}) => {
  if (actualRoom != -1) {
    if(index > (rooms[actualRoom].shapes.length-5)) {
      // shapeRequest(actualRoom, rooms)
      console.log('shape requested')
    }
  }
  
  const [start, setStart] = useState(false)
  const StartGame = () => {
    setStart(true)
  }
  return (
      <Wrap>
          {
            start ? <Test/>  : <StartPage callback={StartGame}/>
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