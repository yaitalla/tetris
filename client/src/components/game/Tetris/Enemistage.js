import React, { useState, useEffect, useCallback } from 'react';
import { StyledStage } from './styles/StyledStage';
import Cell from './Cell';


const EnemiStage = ({ stage }) => {
    const hideEnemi = useCallback(stage => {
        let ret = [];
        for (let row in stage) {
            for (let cell in stage[row]){
                stage[row][cell][0] = 0;
                if (stage[row][cell][1] === 'merged' && ret.indexOf(cell) === -1){
                    stage[row][cell][0] = 2;
                    ret.push(cell)
                }
            }
        }
    }, [stage])
    hideEnemi(stage)
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

export default EnemiStage;