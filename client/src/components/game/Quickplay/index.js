import React, { useState, useContext, useEffect} from 'react';
import { checkCollision } from '../../../config/gameHelpers';
import { Wrap, Screen, Sider } from './style';
import { GAME_STATUS, START_PAGE, NEW, PLAYING, WAITING} from '../../../config/constants';
import { useInterval } from '../../../hooks/useInterval';
import { usePlayer} from '../../../hooks/usePlayer';
import { useStage } from '../../../hooks/useStage';
import {start, tenMoreShapes, waittingOwner} from '../../../sockets/emit';
import {useGameStatus} from '../../../hooks/useGameStatus';
import { Context } from '../../../reducer';
import { Back } from '../Menu/style';
import Stage from '../Tetris/Stage';
import Start from './Start';


const QuickPlay = () => {
    const {store, dispatch} = useContext(Context)
    const [dropTime, setDropTime] = useState(1000);
    const [gameOver, setGameOver] = useState(false);
    const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
    const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
    const  [score, setScore, rows, setRows, level, setLevel] = useGameStatus(rowsCleared);
    
    const movePlayer = dir => {
        if (!checkCollision(player, stage, {x: dir, y: 0})) {
            updatePlayerPos({x: dir, y: 0 });
        }
    }
    const drop = () => {
        if (rows > (level + 1) * 10) {
            setLevel(prev => prev + 1);
            setDropTime(1000 / (level + 1) + 200);
        }
        if (!checkCollision(player, stage, {x: 0, y: 1})) {
            updatePlayerPos({x: 0, y: 1, collided: false })
        } else {
            if (player.pos.y < 1) {
                const change = store.actualRoom.owner === store.status.id ? true : false;
                setGameOver(true);
                setDropTime(null);
                // winner(store.actualRoom, score, change)
            }
            updatePlayerPos({x: 0, y: 0, collided: true});
        }
    }
    const keyUp = ({keyCode }) => {
        if (!gameOver) {
            if (keyCode === 40) {
                setDropTime(1000 / (level + 1) + 200);
            }
        }
    }
    const dropPlayer = () => {
        setDropTime(null);
        drop();
    }
    const move = ({keyCode}) => {
        if (!gameOver && store.actualRoom.status === PLAYING) {
            if (keyCode === 37) {
                movePlayer(-1);
            }else if (keyCode === 39) {
                movePlayer(1);
            }else if (keyCode === 40) {
                    dropPlayer();
            }else if (keyCode === 38) {
                playerRotate(stage, 1);
            }
        }
    }
    const startGame = () => {
        console.log('clicked', store.status.id)
        console.log('owner', store.actualRoom.owner)
        if (store.actualRoom.owner === store.status.id){
            if (store.actualRoom.status === NEW 
                || store.actualRoom.status === WAITING){
                    resetPlayer(0, store.actualRoom.shapes);
            }
            start(store.actualRoom)
        }
    }

    // if (store.actualRoom.shapes.length < player.i + 3){
    //     tenMoreShapes(store.actualRoom)
    // }
    if (store.actualRoom.shapes){
        if (store.actualRoom.shapes.length < player.i + 3){
            tenMoreShapes(store.actualRoom)
        }
    }

    useInterval(() => {
        if (store.actualRoom.status === PLAYING){
            drop();
        }
    }, dropTime)
    useEffect(() => {
        if (store.actualRoom.owner !== store.status.id
            && store.actualRoom.status === NEW){
                waittingOwner(store.actualRoom)
                resetPlayer(0);
        }
    }, [store])
    console.log('ici',store)

    return (
        <Wrap role="button" tabIndex="0" onKeyDown={e => move(e)} onKeyUp={keyUp}>
            <Back onClick={() => dispatch({type: GAME_STATUS, gameStatus: START_PAGE})} >Back</Back>
            <Screen>
                <Stage stage={stage} />
                <Sider>
                    <Start callback={startGame} />
                </Sider>
            </Screen>
            {

            }
        </Wrap>
    )
}

export default QuickPlay;