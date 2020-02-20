import React, { useContext, useCallback }  from 'react';
import Tetris from '../Tetris';
import {Context} from '../../../reducer';

const Menu = ({callback}) => {
    // const { actualRoom } = useContext(SocketContext);
   
    const {store} = useContext(Context)
    return (
        <div>
            <Tetris/>
            {
                // store.actualRoom ? <Tetris/> : <Pregame/>
            }
        </div>
    )
}

export default Menu;