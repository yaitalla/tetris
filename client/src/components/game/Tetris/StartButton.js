import React, {useContext} from 'react';
import { StyledStartButton } from './styles/StyledStartButton';
import {Context} from '../../../reducer';
import { NEW, PLAYING } from '../../../config/constants';
const StartButton = ({callback}) => {
    const {store, dispatch} = useContext(Context)
    console.log(store.gameStatus)
    return(
        <StyledStartButton onClick={callback}>
            {
                store.gameStatus === NEW ? "Start Game"
                : store.gameStatus === PLAYING ? "Pause" : "PLAY"
                
            }
        </StyledStartButton>
    )
}

export default StartButton;