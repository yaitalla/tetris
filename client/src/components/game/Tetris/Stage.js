import React, { useState } from 'react';
import { StyledStage } from './styles/StyledStage';
import Cell from './Cell';


const Stage = ({ stage }) => {
    // console.log(stage)
    const [ghost, setGhost] = useState([]);
    const ghostChecker = (stage) => {
        let ret = [];
        for (let row in stage) {
            
            for (let cell in stage[row]){
                
                let column = 0, line = row;
                const i = 19 - row;
                let res = +i + +row;
                if (stage[row][cell][0] !== 0 && stage[row][cell][1] === 'clear'
                        && stage[row][cell][0] !== 1 && ret.indexOf(cell) === -1){ //shape 
                   
                    while(stage[line][cell][0] !== 0 && stage[line][cell][0] !== 1 && line < 19 ){
                        column++
                        line++;
                    }
                    ret.push(cell)

                    while(column){
                        while (stage[res][cell][1] === 'merged'){
                            res--;
                        }
                        stage[res][cell][0] = 1;
                        res--;
                        column--;
                    }
                    // console.log("colone de:",column, "cases", stage[row][cell][0], ret, cell)
                }
                // if (ret.indexOf(cell) !== -1 && stage[row][cell][0] === 0){
                //     console.log(stage[res][cell][0], column)
                    
                //     // stage[row][cell][0] = 1;
                // }


            }
        }
    }
    ghostChecker(stage)
    return (
        <StyledStage width={stage[0].length} height={stage.length}>
            {
                stage.map(row => 
                    row.map((cell, x) => 
                        <Cell key={x} i={x} type={cell[0]} />
                ))
                // Row(stage)
            }
            
        </StyledStage>
    )
}

export default Stage;