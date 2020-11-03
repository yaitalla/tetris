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
import { PLAYING, STATUS, SHAPES, WAITING, PAUSED } from '../../constants';
import {checkCollision} from '../../misc';

const Survie = () => {
    const {store, dispatch} = useContext(SoloContext)
    const [dropTimeout, setDropTimeout] = useState(1000);
    const [gameOver, setGameOver] = useState(false);
    const [shapes, setShapes] = useState(store.shapes);
    const [control, position, reset, rotate] = useControl(shapes);
    const [field, setField, clearedRows, score] = useGameField(control, reset, shapes);
    
    const drop = () => {
        if(!checkCollision(control, field, {x: 0, y: 1})) {
            position({x: 0, y: 1, collided: false})
        } else {
            position({x: 0, y: 0, collided: true})
        }
    }
    const movePosition = (way) => {
        if(!checkCollision(control, field, {x: way, y: 0})) {
            position({x: way, y: 0, collided: false})
        }
    }
    const move = (e) => {
        e.preventDefault();
            if (e.keyCode === 37) {
                movePosition(-1)
            }else if (e.keyCode === 39) {
                movePosition(1);
            }else if (e.keyCode === 40) {
                setDropTimeout(null);
                drop();
            }else if (e.keyCode === 38) {
                rotate(field, 1)
            }
        // if (!gameOver && store.actualRoom.status === PLAYING) {
        //     if (keyCode === 37) {
    }
    const resetDropTime = ({keyCode}) => {
        if (keyCode === 40) {
            setDropTimeout(1000 / (3) + 200);
        }
    }
    const start = () => {
        const newStatus = store.playing === PLAYING ? PAUSED : PLAYING;
        if (store.playing === WAITING) { reset(0) }
        dispatch({type: PLAYING, playing: newStatus})
    }
    useTimeout(() => {
        if (store.playing === PLAYING) {
            drop()
        }
    }, dropTimeout);
    if (shapes.length < control.i + 3){
        dispatch({type: SHAPES, shapes: tenMoreShapes(shapes)})
        console.log('need shapes')
    }
    return (
        <Wrapped
                onKeyDown={ e => move(e)}
                onKeyUp={ e => resetDropTime(e) }
        >

            <Link passHref href="/" >
                <StyledA>retour</StyledA>
            </Link>
            <StyledFrame>
                <GameField field={field}/>
                <InfoPanel rows={clearedRows} cb={start}
                    ns={shapes[control.i + 1].shape}
                    score={score}
                />
            </StyledFrame>
        
        </Wrapped>
    )
}

export default Survie;