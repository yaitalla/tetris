import React, { useCallback } from 'react';
import { FieldGrid } from './style';
import Cell from '../../components/atomicCell';
import { MERGED, CLEAR } from '../../constants';

const GameField = ({ field }) => {
    // console.log(field[0].length, field.length, field)
    // console.log(field)
    const maxOffset = (arr) => {
        let ret = [];
        let max = 19;
        for (let row in arr) {
            for (let cell in arr[row]) {
                let i = 0, line = row;
                if (arr[line][cell][0] !== 0 && arr[row][cell][1] === CLEAR
                    && arr[line][cell][0] !== 1 && ret.indexOf(cell) === -1) {
                    while (arr[line][cell][0] !== 0
                        && arr[line][cell][0] !== 1 && line < 19) {
                        i++;
                        line++;
                    }
                    while (field[line][cell][1] !== MERGED && line < 19) {
                        line++;
                    }
                    line = field[line][cell][1] !== MERGED ? line : line - 1;
                    let check = (line - i - row);
                    max = check < max ? check : max;
                    ret.push(cell);
                }
            }
        }
        return max;
    }
    return (
        <>
        {
                <FieldGrid width={field[0].length} height={field.length} >
                    {
                        field.map(row =>
                            row.map((cell, x) => 
                                <Cell key={x} i={x} type={cell[0]} />
                            ))
                    }
                </FieldGrid>
        }
        </>
        
    )
}

export default GameField;