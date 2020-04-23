import {useState, useEffect, useContext } from 'react';
import { createStage} from '../config/gameHelpers';
import {Context} from '../reducer';
import { multiPlayer } from '../sockets/emit';

export const useStage = (player, resetPlayer) => {
    const [stage, setStage] = useState(createStage());
    const [rowsCleared, setRowsCleared] = useState(0);
    const {store, dispatch} = useContext(Context)

    useEffect(() => {
        setRowsCleared(0);
        // console.log(player)
        const sweepRows = newStage =>
            newStage.reduce((ack, row) => {
                if (row.findIndex(cell => cell[0] === 0) === -1) {
                    setRowsCleared(prev => prev + 1);
                    ack.unshift(new Array(newStage[0].length).fill([0, 'clear']));
                    return ack;
                }
                ack.push(row);
                return ack;
        }, [])

        const updateStage = prevStage => {
            const newStage = prevStage.map(row =>
                row.map(cell => (cell[1] === 'clear' ? [0, 'clear'] : cell)),
            );

            player.tetromino.forEach((row, y) => {
                row.forEach((value, x) => {
                    if (value !== 0) {
                        newStage[y + player.pos.y][x + player.pos.x] = [
                            value,
                            `${player.collided ? 'merged' : 'clear'}`,
                        ];
                    }
                });
            });

            if (player.collided) {
                let ret = sweepRows(newStage);
                resetPlayer(player.i + 1, store.actualRoom.shapes);
                multiPlayer(ret, store.actualRoom)
                return ret;
            }

            return newStage;
        };
        setStage(prev => updateStage(prev));
    }, [player, resetPlayer, multiPlayer]);

    return [stage, setStage, rowsCleared];
};