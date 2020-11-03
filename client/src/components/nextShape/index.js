import React, {memo} from 'react';
import { Wrap, DisplayP, NextShapeField, NextShapeCell } from './style';
import { TETROMINOS } from '../../tetrominos';

const N = ({border}) => {
    return (
        <NextShapeCell border={border}
                            colors={border === 0 ? '0, 0, 0' : TETROMINOS[border].color}
                        />
    )
}

const NextShape = ({ shape }) => {
    return (
        <Wrap>
            <DisplayP>Next Shape</DisplayP>
            <NextShapeField  width={shape[0].length} height={shape.length}>
                {
                    shape.map(row =>
                        row.map((cell, x) =>
                        <N border={cell} key={x}
                        />
                    ))
                }
            </NextShapeField>
        </Wrap>
    )
}

export default memo(NextShape);