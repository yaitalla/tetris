import React from 'react';
import { Wrap, DisplayP, NextShapeField, NextShapeCell } from './style';
import { TETROMINOS } from '../../tetrominos';

const NextShape = ({ shape }) => {
    return (
        <Wrap>
            <DisplayP>Next Shape</DisplayP>
            <NextShapeField  width={shape[0].length} height={shape.length}>
                {
                    shape.map(row =>
                        row.map((cell, x) =>
                        <NextShapeCell border={cell} key={x}
                            color={TETROMINOS[cell].color}
                        />
                    ))
                }
            </NextShapeField>
        </Wrap>
    )
}

export default NextShape;