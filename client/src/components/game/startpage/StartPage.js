import React from 'react';

import {Wrap, StyledStartPage, StyleButton, Background, Credit, Name} from './styles/StyledStartPage';

const StartPage = ({callback}) => {return(
    <Wrap>
        <Background/>
        <StyledStartPage> {"RED TETRIS"}</StyledStartPage>
        <StyleButton onClick={callback} >Start Game</StyleButton>
        <Credit>
            <Name>Yaitalla</Name>
            <Name>Chray</Name>
        </Credit>
    </Wrap>
)}

export default StartPage;