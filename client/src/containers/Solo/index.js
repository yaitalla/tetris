import React, {useContext, useEffect, useState, useReducer} from 'react';
import { useControl } from '../../customHooks/useControl';
import { useGameField } from '../../customHooks/useGamefield';
import { useTimeout } from '../../customHooks/useTimeout';
import Link from 'next/link';
import { StyledA, Wrapped, StyledFrame } from './style';
import GameField from '../GameField';
import InfoPanel from '../../components/infoPanel';
import { tenMoreShapes } from '../../tetrominos';
import {soloState, soloReducer, SoloContext} from './reducer';
import { PLAYING, STATUS, SHAPES } from '../../constants';
import {checkCollision} from '../../misc';

const Survie = () => {
    const {store, dispatch} = useContext(SoloContext)
    const [dropTimeout, setDropTimeout] = useState(1000);
    const [gameOver, setGameOver] = useState(false);
    const [shapes, setShapes] = useState(store.shapes);
    const [control, position, reset, rotate] = useControl(shapes);
    const [field, setField, clearRows] = useGameField(control, reset, shapes);
    const drop = () => {
        if(!checkCollision(control, field, {x: 0, y: 1})) {
            position({x: 0, y: 1, collided: false})
        } else {
            position({x: 0, y: 0, collided: true})
        }
    }
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
    const start = () => {
        reset(0)
        dispatch({type: PLAYING, playing: !store.playing})
    }
    useTimeout(() => {
        if (store.playing) {
            drop()
        }
    }, dropTimeout);
    if (shapes.length < control.i + 3){
        dispatch({type: SHAPES, shapes: tenMoreShapes(shapes)})
        console.log('need shapes')
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
                <InfoPanel cb={start} ns={shapes[control.i].shape}/>
            </StyledFrame>
        
        </Wrapped>
    )
}

export default Survie;