import React, { useContext, useCallback }  from 'react';
import Tetris from '../Tetris';
import Pregame from './preGame';
import {Context} from '../../../reducer';

const Menu = ({callback}) => {
   
    const {store, dispatch} = useContext(Context)
    return (
        <div>
            {
                store.actualRoom ? <Tetris/> : <Pregame callback={dispatch}/>
            }
        </div>
    )
}

export default Menu;