import React, { useState, useContext, useEffect} from 'react';

import { createStage, checkCollision } from '../../../config/gameHelpers';

// Styled Components
import { StyledTetrisWrapper, StyledTetris, Sider } from './styles/StyledTetris';

// Custom Hooks
import { useInterval } from '../../../hooks/useInterval';
import { usePlayer} from '../../../hooks/usePlayer';
import { useStage } from '../../../hooks/useStage';
import {useGameStatus} from '../../../hooks/useGameStatus';
import { Context } from '../../../reducer';
// components
import Stage from './Stage';
import EnemiStage from './Enemistage';
import Display from './Display';
import StartButton from './StartButton';
import { tenMoreShapes, start, waittingOwner, winner, leaveEnduro } from '../../../sockets/emit';
import { NEW, PLAYING, PAUSE, GAME_STATUS, ACTUAL_ROOM, WAITING } from '../../../config/constants';
import { Back } from '../Menu/style';
import NextShape from './NextShape';
import { Winner } from './styles/StyledStage';

const Tetris = () => {
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
                winner(store.actualRoom, score, change)
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

    useInterval(() => {
        if (store.actualRoom.status === PLAYING){
            drop();
        }
    }, dropTime)
    if (store.actualRoom.shapes.length < player.i + 3){
        tenMoreShapes(store.actualRoom)
    }
    const startGame = () => {
        if (store.actualRoom.owner === store.status.id){
            if (store.actualRoom.status === NEW 
                || store.actualRoom.status === WAITING){
                    resetPlayer(0);
            }
            start(store.actualRoom)
        }
    }
    useEffect(() => {
        if (store.actualRoom.owner !== store.status.id
            && store.actualRoom.status === NEW){
                waittingOwner(store.actualRoom)
                resetPlayer(0);
        }
    }, [store])
    const quit = () => {
        // dispatch({type: ACTUAL_ROOM, room: ""})
        leaveEnduro(store.actualRoom)
    }
    return(
        <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)} onKeyUp={keyUp}>
            <Back onClick={quit} >Quit</Back>
            <StyledTetris>
                <Stage stage={stage} />
                <Sider>
                    {gameOver ? (
                        <Display gameOver={gameOver} text="Game Over" />
                    ) : (
                        <div>
                            <Display text={`Score: ${score}`} />
                            <Display text={`rows: ${rows}`}/>
                            <Display text={`Level: ${level}`} />
                            <NextShape shape={store.actualRoom.shapes[player.i+1].shape} />    
                        </div>
                    )}
                    <StartButton callback={startGame}/>
                    
                    
                </Sider>
                {
                    store.actualRoom.users.length === 1 ? null :
                    store.winner === false ? <EnemiStage stage={store.enemi} />
                    :   <Winner>
                            <Display text={`Game Over`} />
                            <Display text={`Score: ${store.enemiScore}`} />
                        </Winner>
                }
            </StyledTetris>
            
        </StyledTetrisWrapper>
    );
};

export default Tetris;