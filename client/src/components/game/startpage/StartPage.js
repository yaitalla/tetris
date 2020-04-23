import React, {useContext} from 'react';
import {Wrap, StyledTitle, StyleButton, Background, Credit, Name, Top, Bottom, BackgroundWrap} from './styles/StyledStartPage';
import { GAME_STATUS, USER_LIST, MENU, QUICK_PLAY } from '../../../config/constants';
import { Context } from '../../../reducer';
import { quickPlay } from '../../../sockets/emit';

const StartPage = ({callback}) => {
    const {store} = useContext(Context)
    const quickie = () => {
        quickPlay();
        callback({type: GAME_STATUS, gameStatus: QUICK_PLAY})
    }
    return(
    <Wrap>
        <BackgroundWrap>
            <Top/>
            <Bottom/>
        </BackgroundWrap>
        <StyledTitle> {"RED TETRIS"}</StyledTitle>
        <StyleButton onClick={() => quickie()} >quick play</StyleButton>
        <StyleButton onClick={() => callback({type: GAME_STATUS, gameStatus: MENU})} >1 vs 1</StyleButton>
        
    </Wrap>
)}

export default StartPage;