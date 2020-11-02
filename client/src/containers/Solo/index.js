import React, {useContext, memo, useState} from 'react';
import { useControl } from '../../customHooks/useControl';
import { useGameField } from '../../customHooks/useGamefield';
import Link from 'next/link';
import { StyledA, Wrapped, StyledFrame } from './style';
import GameField from '../GameField';
import { tenMoreShapes } from '../../tetrominos';


const Survie = () => {
    const [dropTimeout, setDropTimeout] = useState(1000);
    const [gameOver, setGameOver] = useState(false);
    const [shapes, setShapes] = useState(tenMoreShapes([]));
    const [control, position, reset, rotate] = useControl(shapes);
    const [field, setField, clearRows] = useGameField(control, reset, shapes);

    const move = ({keyCode}) => {
            if (keyCode === 37) {
                console.log("left");
            }else if (keyCode === 39) {
                console.log("rigth");
            }else if (keyCode === 40) {
                console.log("down");
            }else if (keyCode === 38) {
                console.log("up");
            }
        // if (!gameOver && store.actualRoom.status === PLAYING) {
        //     if (keyCode === 37) {
    }
    return (
        <Wrapped role="button"
                onKeyDown={ e => move(e)}
                onKeyUp={ e => (e) }
        >

            <Link passHref href="/" >
                <StyledA>retour</StyledA>
            </Link>
            <StyledFrame>
                <GameField field={field}/>
            </StyledFrame>
        
        </Wrapped>
    )
}

export default Survie;