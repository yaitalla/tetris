import React, {useContext} from 'react';
import { StyledStartButton } from './styles/StyledStartButton';
import {Context} from '../../../reducer';
import { NEW, PLAYING, WAITING } from '../../../config/constants';
const StartButton = ({callback}) => {
    const {store, dispatch} = useContext(Context)
    // console.log(store.actualRoom)
    return(
        <StyledStartButton onClick={() => callback(store.actualRoom)}>
            {
                store.actualRoom.status === NEW || store.actualRoom.status === WAITING ? "Start Game"
                : store.actualRoom.status === PLAYING ? "Pause" : "PLAY"
                
            }
        </StyledStartButton>
    )
}

export default StartButton;