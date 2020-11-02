import { useState, useEffect, useContext } from 'react';
import { createField } from '../misc';

import { CLEAR, MERGED } from '../constants';

export const useGameField = (control, reset, shapes) => {
    const [field, setField] = useState(createField());
    const [clearedRows, setClearedRows] = useState(0);

    useEffect(() => {
        setClearedRows(0);
        
        const clearRows = newField =>
            newField.reduce((acc, row) => {
                if (row.findIndex(cell => cell[0] === 0) === -1){
                    setClearedRows(prev => prev + 1);
                    acc.unshift(new Array(newField[0].length).fill([0, CLEAR]))
                }
                acc.push(row)
                return acc;
            }, [])
        
        const updateField = previousField => {
            const newField = previousField.map(row => 
                row.map(cell => cell[1] === CLEAR ? [0, CLEAR] : cell)
            );
            control.tetromino.forEach((row, y) => {
                row.forEach((value, x) => {
                    if (value !== 0) {
                        newField[y + control.pos.y][x + control.pos.x] = [
                            value,
                            control.collided ? MERGED : CLEAR
                        ]
                    }
                })
            });
            if (control.collided) {
                let ret = clearRows(newField);
                reset(control.i + 1, shapes);
                return ret;
            }
            return newField;
        }

        setField(prev => updateField(prev));
    }, [control, reset]);
    return [field, setField, clearedRows];
};