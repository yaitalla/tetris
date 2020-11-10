import React, {useContext, useEffect, useState, useReducer} from 'react';
import { useControl } from '../../customHooks/useControl';
import { useGameField } from '../../customHooks/useGamefield';
import { useTimeout } from '../../customHooks/useTimeout';
import { useGameInfo } from '../../customHooks/useGameInfo';
import Link from 'next/link';
import { StyledA, Wrapped, StyledFrame } from './style';
import GameField from '../GameField';
import InfoPanel from '../../components/infoPanel';
import { tenMoreShapes, CHEAT_SHAPES } from '../../tetrominos';
import {SoloContext} from './reducer';
import { PLAYING, SHAPES, WAITING, PAUSED, GAME_OVER } from '../../constants';
import {checkCollision, createField} from '../../misc';

const Survie = () => {
    const {store, dispatch} = useContext(SoloContext)
    const [dropTimeout, setDropTimeout] = useState(1000);
    const [shapes, setShapes] = useState(tenMoreShapes([]));
    const [control, position, reset, rotate] = useControl(shapes);
    const [field, setField, clearedRows, setClearedRows] = useGameField(control, reset, shapes);
    const [score, rows, level, setLevel ] = useGameInfo(clearedRows);
    

    const drop = () => {
        if (control.collided) {
            // console.log('/!\ CRASH DODGEG /!\ ')
            return;
        }
        if (rows >= (level * 10)){
            setLevel(prev => prev + 1);
            setDropTimeout(prev => prev - 100);
        }
        if(!checkCollision(control, field, {x: 0, y: 1})) {
            position({x: 0, y: 1, collided: false})
        } else {
            if (control.pos.y < 1){
                dispatch({type: PLAYING, playing: GAME_OVER});
                setDropTimeout(null)
            }
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
                // setDropTimeout(null);
                drop();
            }else if (e.keyCode === 38 && ok) {
                rotate(field, 1)
            }
    }
    const resetDropTime = ({keyCode}) => {
        if (keyCode === 40) {
            setDropTimeout(dropTimeout);
        }
    }
    const start = () => {
        const newStatus = store.playing === PLAYING ? PAUSED : PLAYING;
        if (store.playing === WAITING) { reset(0) }
        if (store.playing === GAME_OVER) {
            setField(createField())
            setClearedRows(0)
            setLevel(1)
            setDropTimeout(1000)
            reset(0, tenMoreShapes([]))

        }
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
    return (
        <Wrapped
                onKeyDown={ e => move(e)}
                // onKeyUp={ e => resetDropTime(e) }
        >
            <StyledFrame>
                <GameField field={field}/>
                <InfoPanel rows={rows} cb={start}
                    ns={shapes[control.i + 1].shape}
                    score={score} status={store.playing}
                    level={level} dp={dropTimeout}
                />
                 <Link passHref href="/" >
                    <StyledA>quit</StyledA>
                </Link>
            </StyledFrame>

        </Wrapped>
    )
}

export default Survie;