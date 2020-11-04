import React, {useContext, useEffect, useState, useReducer} from 'react';
import { useControl } from '../../customHooks/useControl';
import { useGameField } from '../../customHooks/useGamefield';
import { useTimeout } from '../../customHooks/useTimeout';
import { useGameInfo } from '../../customHooks/useGameInfo';
import Link from 'next/link';
import { StyledA, Wrapped, StyledFrame } from './style';
import GameField from '../GameField';
import InfoPanel from '../../components/infoPanel';
import { tenMoreShapes } from '../../tetrominos';
import {SoloContext} from './reducer';
import { PLAYING, SHAPES, WAITING, PAUSED } from '../../constants';
import {checkCollision} from '../../misc';

const Survie = () => {
    const {store, dispatch} = useContext(SoloContext)
    const [dropTimeout, setDropTimeout] = useState(1000);
    const [gameOver, setGameOver] = useState(false);
    const [shapes, setShapes] = useState(tenMoreShapes([]));
    const [control, position, reset, rotate] = useControl(shapes);
    const [field, clearedRows, score] = useGameField(control, reset, shapes);
    

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
        const ok = store.playing === PLAYING;
            if (e.keyCode === 37 && ok) {
                movePosition(-1)
            }else if (e.keyCode === 39 && ok) {
                movePosition(1);
            }else if (e.keyCode === 40 && ok) {
                setDropTimeout(null);
                drop();
            }else if (e.keyCode === 38 && ok) {
                rotate(field, 1)
            }
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
        setShapes(tenMoreShapes(shapes))
    }
    console.log(score)
    return (
        <Wrapped
                onKeyDown={ e => move(e)}
                onKeyUp={ e => resetDropTime(e) }
        >

            
            <StyledFrame>
                <GameField field={field}/>
                <InfoPanel rows={clearedRows} cb={start}
                    ns={shapes[control.i + 1].shape}
                    score={0} status={store.playing}
                />
                 <Link passHref href="/" >
                    <StyledA>quit</StyledA>
                </Link>
            </StyledFrame>

        </Wrapped>
    )
}

export default Survie;