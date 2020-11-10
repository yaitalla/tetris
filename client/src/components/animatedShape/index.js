import React from 'react';
import { Field, Cell, Wrap } from './style';
import { TETROMINOS, tenMoreShapes } from '../../tetrominos';


const Custom = ({cell}) => {
    return (
        <Cell border={cell}
            color={TETROMINOS[cell].color}
            opacity={cell === 0 ? '0' : '0.8'}
        />
    )
}

const AnimShape = ( { shape, i } ) => {
    console.log("anim shape key ",i)
    const translater = [
        "-100px, -100px",
        "100px, 100px",
        "100%, 100%",
        "100%, 100%",
        "100%, 100%",
        "100%, 100%",
        "100%, 100%",
        "100%, 100%",
        "100%, 100%",
        "100%, 100%",
    ];
    return (
        <Wrap ratio={translater[i]}>
            <Field width={shape[0].length} height={shape.length} >
                {   shape ?
                    shape.map(row =>
                        row.map((cell, x) =>
                        <Custom key={x} cell={cell}
                        />
                    ))
                    : null
                }
            </Field>
        </Wrap>
        
    )
}

export default AnimShape;