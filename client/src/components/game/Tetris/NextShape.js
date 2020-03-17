import React from 'react';
import {StyledCellN} from './styles/StyledCell';
import {TETROMINOS } from '../../../config/tetrominos';
import { StyledStageN, DisplayP, Wrap } from './styles/StyledStage';
import Display from './Display';

const NextShape = ({shape}) => {
    // console.log(shape)
    let ret;
    shape.map((line, i) => {
        line.map((cell, j) => {
            if (cell !== 0){
                ret = cell;
            }
        })
    })
    // console.log(ret)
    return (
        <Wrap>
            <DisplayP>Next Shape</DisplayP>
            <StyledStageN width={shape[0].length} height={shape.length}>
                {
                    shape.map(row => 
                        row.map((cell, x) => 
                            <StyledCellN type={cell} color={TETROMINOS[cell].color} key={x}></StyledCellN>
                    ))
                }
            </StyledStageN>
        </Wrap>
        
    )
}

export default NextShape;