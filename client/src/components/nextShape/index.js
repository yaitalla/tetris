import React, {memo} from 'react';
import { Wrap, DisplayP, NextShapeField, NextShapeCell } from './style';
import { TETROMINOS } from '../../tetrominos';
import { WAITING } from '../../constants';

const N = ({border}) => {
    return (
        <NextShapeCell border={border}
            colors={border === 0 ?
                        '0, 0, 0'
                        : TETROMINOS[border].color
                    }
        />
    )
}

const NextShape = ({ shape, status }) => {
    return (
        <Wrap>
            <DisplayP>Next Shape</DisplayP>
            <NextShapeField  width={shape[0].length} height={shape.length}>
                {
                    status !== WAITING ?
                    shape.map(row =>
                        row.map((cell, x) =>
                        <N border={cell} key={x}
                        />
                    ))
                    : null
                }
            </NextShapeField>
        </Wrap>
    )
}

export default memo(NextShape);