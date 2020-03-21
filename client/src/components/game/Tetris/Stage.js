import React, { useState, useEffect, useCallback } from 'react';
import { StyledStage } from './styles/StyledStage';
import Cell from './Cell';


const Stage = ({ stage }) => {
    const maximumOffset = (arr) => {
        let ret = [];
        let maxOff = 19;
        for (let row in arr) {
            for (let cell in arr[row]){
                let count = 0, line = row;
                if (arr[line][cell][0] !== 0 && arr[line][cell][0] !== 1 && arr[row][cell][1] === 'clear' && ret.indexOf(cell) === -1){
                    while(arr[line][cell][0] !== 0 && arr[line][cell][0] !== 1 && line < 19 ){
                        count++;
                        line++;
                    }
                    while(stage[line][cell][1] !== 'merged' && line < 19 ) {
                        line++
                    }
                    line = stage[line][cell][1] !== 'merged' ? line : line - 1;
                    let check = (line - count - row);
                    maxOff = check < maxOff ? check : maxOff;
                    ret.push(cell)
                }
            }
        }
        return maxOff;
    }
    const ghostChecker = useCallback((stage) => {
        let ret = [];
        const maxOff = maximumOffset(stage)
        for (let row in stage) {
            for (let cell in stage[row]){
                let column = 0, line = row;
                if (stage[row][cell][0] !== 0 && stage[row][cell][1] === 'clear'
                        && stage[row][cell][0] !== 1 && ret.indexOf(cell) === -1){ //shape 
                            while(stage[line][cell][0] !== 0 && stage[line][cell][0] !== 1 && line < 19 ){
                                column++
                                line++;
                            }
                            ret.push(cell)
                            line = +row + maxOff + column;
                            while(column) {
                                if(stage[line][cell][0] === 0){
                                    stage[line][cell][0] = 1;
                                }
                                line--;
                                column--;
                            }
                }
            }
        }
    }, [stage, maximumOffset])

    ghostChecker(stage)
    
    return (
        <StyledStage width={stage[0].length} height={stage.length}>
            {
                stage.map(row => 
                    row.map((cell, x) => 
                        <Cell key={x} i={x} type={cell[0]} />
                ))
            }
        </StyledStage>
    )
}

export default Stage;