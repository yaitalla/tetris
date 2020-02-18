import React from 'react';
import {Wrap, StyledTitle, StyleButton, Background, Credit, Name} from './styles/StyledStartPage';
import { GAME_STATUS, USER_LIST } from '../../../config/constants';
const StartPage = ({callback}) => {return(
    <Wrap>
        <Background/>
        <StyledTitle> {"RED TETRIS"}</StyledTitle>
        <StyleButton onClick={() => callback({type: GAME_STATUS, gameStatus: USER_LIST})} >Start Game</StyleButton>
        <Credit>
            <Name>Yaitalla</Name>
            <Name>Chray</Name>
        </Credit>
    </Wrap>
)}

export default StartPage;