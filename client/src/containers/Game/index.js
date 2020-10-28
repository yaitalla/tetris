import React, {useContext} from 'react'
import {Wrapped, StyledA, StyledH1} from './style';
import Link from 'next/link';
import { Context } from '../../reducer';

const Game = () => {
    const { store, dispatch } = useContext(Context);
    return (
        <Wrapped>
            <h3>Game</h3>
            {store}
            <Link passHref href="/" >
            <StyledA>Exit</StyledA>
            </Link>
        </Wrapped>
    )
}

export default Game;