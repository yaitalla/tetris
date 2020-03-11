import React, { useState, useContext} from 'react';

import { createStage, checkCollision } from '../../../config/gameHelpers';

// Styled Components
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris';

// Custom Hooks
import { useInterval } from '../../../hooks/useInterval';
import { usePlayer} from '../../../hooks/usePlayer';
import { useStage } from '../../../hooks/useStage';
import {useGameStatus} from '../../../hooks/useGameStatus';
import { Context } from '../../../reducer';
// components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';
import { multiPlayer, tenMoreShapes } from '../../../sockets/emit';
import { NEW } from '../../../config/constants';

const Tetris = () => {
    const {store, dispatch} = useContext(Context)
    const [dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false);
    const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
    const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
    const  [score, setScore, rows, setRows, level, setLevel] = useGameStatus(rowsCleared);


    const movePlayer = dir => {
        if (!checkCollision(player, stage, {x: dir, y: 0})) {
            updatePlayerPos({x: dir, y: 0 });
        }
    }

    const startGame = () => {
        //reset everything
        // setStage(createStage());
        console.log(store.actualRoom)
        if (store.actualRoom.owner === store.status.id && store.gameStatus === NEW) {
            setDropTime(1000);
            resetPlayer(0);
            setGameOver(false);
            setScore(0);
            setLevel(0);
            // console.log('player', player)
            if(store.actualRoom.users.length > 1) {
                multiPlayer(dropTime, player, rows, score, level, stage, store.actualRoom)
            }
        }
        
    // console.log(dropTime, player, rows, score, level, stage)
    }

    const drop = () => {
        // console.log('drop here')
        // Increase level when player has cleared 10 rows
        if (rows > (level + 1) * 10) {
            setLevel(prev => prev + 1);
            // Also increase speed
            setDropTime(1000 / (level + 1) + 200);
        }
        if (!checkCollision(player, stage, {x: 0, y: 1})) {
            updatePlayerPos({x: 0, y: 1, collided: false })
        } else {
            //Game Over
            if (player.pos.y < 1) {
                console.log("GAME OVER");
                setGameOver(true);
                setDropTime(null);
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
        if (!gameOver) {
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
        drop();
    }, dropTime)
    if (store.actualRoom.shapes.length < player.i + 2){
        // console.log('ici plus', store.actualRoom.shapes.length, player.i)
        tenMoreShapes(store.actualRoom)
    }
    // console.log(dropTime, player, rows, score, level, stage)
    console.log(store)
    // if(store.actualRoom.users.length > 1) {
    //     multiPlayer(dropTime, player, rows, score, level, stage, store.actualRoom)
    // }
    return(
        <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)} onKeyUp={keyUp}>
            <StyledTetris>
                <Stage stage={stage} />
                <aside>
                    {gameOver ? (
                        <Display gameOver={gameOver} text="Game Over" />
                    ) : (
                        <div>
                            <Display text={`Score: ${score}`} />
                            <Display text={`rows: ${rows}`}/>
                            <Display text={`Level: ${level}`} />
                        </div>
                    )}
                    <StartButton callback={startGame}/>
                </aside>
                {
                    store.actualRoom.users.length > 1 ? <Stage stage={store.enemi.stage} />
                    : null
                }
                
            </StyledTetris>
            
        </StyledTetrisWrapper>
    );
};

export default Tetris;