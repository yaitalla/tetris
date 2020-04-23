import React, {useContext} from 'react';
import {StyledStartButton} from './style';
import {Context} from '../../../reducer';
import {NEW, PLAYING, WAITING} from '../../../config/constants';

const Start = ({callback}) => {
    const {store, dispatch} = useContext(Context)
    return (
        <StyledStartButton onClick={() => callback(store.actualRoom)} >
            {
                store.actualRoom.status === NEW || store.actualRoom.status === WAITING ? "Start Game"
                : store.actualRoom.status === PLAYING ? "Pause" : "PLAY"
                
            }
        </StyledStartButton>
    )
}

export default Start;